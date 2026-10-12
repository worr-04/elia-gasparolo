"""Check the built static site without third-party packages or network access."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlparse, unquote
import base64
import hashlib
import json
import xml.etree.ElementTree as ET

ROOT = Path('dist')
errors = []
class Page(HTMLParser):
    def __init__(self, path):
        super().__init__(convert_charrefs=True)
        self.path, self.nodes, self.scripts, self.styles = path, [], [], []
        self.active = None
        self.feed(path.read_text())
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        self.nodes.append((tag, attrs))
        if tag in ('script', 'style'):
            self.active = [tag, attrs, '']
    def handle_data(self, data):
        if self.active: self.active[2] += data
    def handle_endtag(self, tag):
        if self.active and tag == self.active[0]:
            (self.scripts if tag == 'script' else self.styles).append(self.active)
            self.active = None
    def fail(self, message): errors.append(f'{self.path}: {message}')
    def meta(self, key):
        return next((a.get('content', '') for t,a in self.nodes if t == 'meta' and (a.get('name') == key or a.get('http-equiv') == key)), '')

pages = [Page(p) for p in ROOT.rglob('*.html')]
canonical_page = next(p for p in pages if p.path == ROOT/'es/index.html')
canonical = next(a['href'] for t,a in canonical_page.nodes if t == 'link' and a.get('rel') == 'canonical')
origin = urlparse(canonical).netloc
base = urlparse(canonical).path.removesuffix('es/')

def local_target(url):
    parsed = urlparse(url)
    if parsed.scheme and parsed.scheme not in ('http', 'https'): return None
    if parsed.netloc and parsed.netloc != origin: return None
    if not parsed.path.startswith(base): return None
    target = ROOT / unquote(parsed.path[len(base):])
    return target / 'index.html' if parsed.path.endswith('/') else target

for page in pages:
    redirect = bool(page.meta('refresh'))
    if not redirect:
        if sum(t == 'h1' for t,a in page.nodes) != 1: page.fail('expected exactly one h1')
        if not page.meta('description'): page.fail('missing description')
        if not any(t == 'html' and a.get('lang') in ('es','en') for t,a in page.nodes): page.fail('missing language')
        csp = page.meta('content-security-policy')
        if not csp or "object-src 'none'" not in csp: page.fail('missing CSP')
        script_policy = next((d for d in csp.split(';') if d.strip().startswith('script-src ')), '')
        if "'unsafe-inline'" in script_policy or "'unsafe-eval'" in script_policy: page.fail('unsafe script policy')
        for tag,attrs,body in page.scripts + page.styles:
            if attrs.get('src') or not body.strip(): continue
            digest = base64.b64encode(hashlib.sha256(body.encode()).digest()).decode()
            if f"'sha256-{digest}'" not in csp: page.fail(f'{tag} hash missing in CSP')
            if attrs.get('type') == 'application/ld+json':
                try: json.loads(body)
                except ValueError: page.fail('invalid JSON-LD')
    for tag,attrs in page.nodes:
        if any(key.startswith('on') for key in attrs): page.fail('inline event handler')
        if tag == 'img' and not all(key in attrs for key in ('alt','width','height')): page.fail('image lacks alt or dimensions')
        if tag == 'a' and attrs.get('target') == '_blank' and 'noopener' not in attrs.get('rel',''): page.fail('unsafe external link')
        if tag == 'link' and attrs.get('rel') in ('canonical','alternate') and 'Caminografico' in attrs.get('href',''): page.fail('SEO URL points to a proposal')
        urls = [attrs[k] for k in ('href','src') if attrs.get(k)]
        urls += [item.strip().split(' ')[0] for item in attrs.get('srcset','').split(',') if item.strip()]
        for url in urls:
            if url.lower().startswith(('javascript:', 'http:')): page.fail('unsafe URL scheme')
            target = local_target(url)
            if target is not None and not target.is_file(): page.fail(f'broken local link: {url}')
    if 'Caminografico' in str(page.path) and 'noindex' not in page.meta('robots'): page.fail('proposal is indexable')

sitemap = ET.parse(ROOT/'sitemap.xml')
locations = [node.text for node in sitemap.findall('.//{*}loc')]
for location in locations:
    target = local_target(location)
    if 'Caminografico' in location or target is None or not target.is_file(): errors.append(f'Invalid sitemap URL: {location}')
if len(locations) != len(set(locations)): errors.append('Duplicate sitemap URL')
if errors:
    raise SystemExit('\n'.join(sorted(set(errors))))
print(f'OK: {len(pages)} HTML pages, {len(locations)} sitemap URLs; local links, images, SEO, JSON-LD and CSP hashes verified.')
