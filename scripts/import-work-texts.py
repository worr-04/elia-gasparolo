"""Import Word text formatting, retaining website typography. No source files are modified."""
from pathlib import Path
import argparse, html, json, re, zipfile
import xml.etree.ElementTree as ET

NS = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
W = '{' + NS['w'] + '}'
SLUGS = ['reliquias','la-propension','la-complicidad-de-los-dupiones','trazas','fases-y-despliegue','derivas','transitos','tejido-conectivo','ofrendas','instalacion-tejido-conectivo','tejido-conectivo-ii','luz-ambar','algol-eclipse','gravitacion','avyakta','sirio-el-ojo-en-el-cielo','messier-m22-m30','cartografias-posibles','el-futuro-es-prehistoria','intocable','destellos-de-naturaleza','paisajes-posibles','entonces-la-proteccion','los-amantes','the-right-to-memory']
ES = ['Reliquias_','La Propensión_','La Complicidad de los Dupiones','Trazas','Fases y Despliegue',' Derivas','Tránsitos','Tejido Conectivo','Ofrendas','Instalación Tejido Conectivo_','Tejido conectivo II','Luz Ámbar','Algol(1)','Gravitación','Avyakta(1)','El Ojo en el Cielo','M22 y M30','Cartografías impredecibles para mares cambiantes','  El Futuro es Prehistoria','Intocable','Destellos de la Naturaleza','Paisajes Posibles','Entonces las Protección','Los Amantes','El Derecho a la Memoria']
import unicodedata
norm = lambda s: unicodedata.normalize('NFC', s)
def props(el):
    return {c.tag.removeprefix(W): {k.removeprefix(W):v for k,v in c.attrib.items()} for c in el} if el is not None else {}
def val(p,k,default=None): return p.get(k,{}).get('val',default)
def enabled(p,k): return k in p and val(p,k,'1') not in ('0','false','off','none')
EDITORIAL_REPLACEMENTS = {
    'cartografias-posibles': {
        'es': ('Año: 2023', 'Año: 2023\nMuseo de Arte Amalia Lacroze de Fortabat. 2023'),
        'en': ('Year: 2023', 'Year: 2023\nAmalia Lacroze de Fortabat Art Museum. 2023.'),
    },
}
OFRENDAS_IMAGES = {
    'foto malbec': ('02.webp', 'Ofrenda Malbec'),
    'bordado malbec': ('03.webp', 'Cielo Ofrenda Malbec'),
    'foto lavanda': ('04.webp', 'Ofrenda Lavandas'),
    'bordado lavanda': ('05.webp', 'Cielo Ofrenda Lavandas'),
    'foto mandarina': ('06.webp', 'Ofrenda Mandarinas'),
    'bordado mandarina': ('07.webp', 'Cielo Ofrendas Mandarinas'),
    'malbec photo': ('02.webp', 'Malbec Offering'),
    'malbec embroidery': ('03.webp', 'Malbec Offering embroidery'),
    'lavender photo': ('04.webp', 'Lavender Offering'),
    'lavender embroidery': ('05.webp', 'Lavender Offering embroidery'),
    'tangerine photo': ('06.webp', 'Tangerine Offering'),
    'tangerine embroidery': ('07.webp', 'Tangerine Offering embroidery'),
}
def parse(path, neutral_colors=False, inline_images=None):
    z=zipfile.ZipFile(path)
    root=ET.fromstring(z.read('word/document.xml'))
    styles=ET.fromstring(z.read('word/styles.xml'))
    byid={s.get(W+'styleId'):s for s in styles.findall('w:style',NS)}
    defaults=styles.find('w:docDefaults',NS)
    dp=props(defaults.find('w:pPrDefault/w:pPr',NS)) if defaults is not None else {}
    dr=props(defaults.find('w:rPrDefault/w:rPr',NS)) if defaults is not None else {}
    normal=next((s.get(W+'styleId') for s in byid.values() if s.get(W+'type')=='paragraph' and s.get(W+'default')=='1'),None)
    def inherited(sid,kind,seen=()):
        if sid not in byid or sid in seen:return {}
        s=byid[sid]; b=s.find('w:basedOn',NS)
        return {**inherited(b.get(W+'val') if b is not None else None,kind,seen+(sid,)),**props(s.find('w:'+kind,NS))}
    links=[]; paragraphs=[]; plain=[]
    pattern=r'(?:https?://[^\s<>]+|(?:www\.)?(?:youtube\.com|youtu\.be)/[^\s<>]+)'
    for p in root.findall('w:body/w:p',NS):
        raw=''.join(n.text or '' for n in p.findall('.//w:t',NS))
        for url in re.findall(pattern,raw):
            url=url.rstrip('.,)'); url=url if url.startswith('https://') else 'https://'+url.removeprefix('http://')
            if url not in links:links.append(url)
        if any(t in raw.lower() for t in ['vani & will','ver si podemos poner','colocar el link al video','link a catalogo web','link a catálogo web','insertar link a video']):continue
        if re.search(pattern,raw):
            remaining=re.sub(pattern,'',raw).strip()
            if not remaining or remaining.lower().strip(' :') in ('video','vídeo'):continue
        marker = re.match(r'\s*\(([^)]+)\)', raw)
        if marker and inline_images and marker[1].strip().lower() in inline_images:
            name, alt = inline_images[marker[1].strip().lower()]
            image = 'works/ofrendas/' + name
            width, height = json.loads(Path('src/work-image-sizes.json').read_text())[image]
            paragraphs.append(f'<figure class="inline-artwork"><img src="__BASE_URL__{image}" width="{width}" height="{height}" alt="{html.escape(alt, quote=True)}" loading="lazy" /></figure>')
            continue
        if re.fullmatch(r'\s*\([^)]*(?:foto|photo|bordado|embroidery)[^)]*\)\s*', raw, re.I):continue
        pp=props(p.find('w:pPr',NS)); sid=val(pp,'pStyle',normal)
        pp={**dp,**inherited(sid,'pPr'),**pp}
        css=[]
        align=val(pp,'jc')
        if align in ('both','distribute'):align='justify'
        if align in ('left','right','center','justify','start','end'):css.append('text-align:'+align)
        for k,prop in [('before','margin-top'),('after','margin-bottom')]:
            if k in pp.get('spacing',{}):css.append(f'{prop}:{float(pp["spacing"][k])/240:g}em')
        for k,prop in [('left','padding-left'),('right','padding-right'),('firstLine','text-indent'),('hanging','text-indent')]:
            if k in pp.get('ind',{}):css.append(f'{prop}:{float(pp["ind"][k])/240*(-1 if k=="hanging" else 1):g}em')
        if pp.get('spacing',{}).get('lineRule')=='auto' and 'line' in pp.get('spacing',{}):
            css.append(f'line-height:{max(1.3,float(pp["spacing"]["line"])/240):g}')
        parts=[]
        for run in p.findall('.//w:r',NS):
            rp=props(run.find('w:rPr',NS)); rp={**dr,**inherited(sid,'rPr'),**inherited(val(rp,'rStyle'),'rPr'),**rp}
            text=''
            for n in run:
                if n.tag==W+'t':text+=html.escape(re.sub(pattern,'',n.text or ''))
                elif n.tag in (W+'br',W+'cr'):text+='<br />'
                elif n.tag==W+'tab':text+='&#9;'
            if not text:continue
            if enabled(rp,'b'):text='<strong>'+text+'</strong>'
            if enabled(rp,'i'):text='<em>'+text+'</em>'
            if enabled(rp,'u'):text='<u>'+text+'</u>'
            if enabled(rp,'strike'):text='<s>'+text+'</s>'
            if val(rp,'vertAlign') in ('superscript','subscript'):
                tag='sup' if val(rp,'vertAlign')=='superscript' else 'sub';text=f'<{tag}>{text}</{tag}>'
            if enabled(rp,'smallCaps'):text='<span style="font-variant:small-caps">'+text+'</span>'
            appearance=[]
            color=val(rp,'color','')
            if not neutral_colors and re.fullmatch(r'[0-9a-fA-F]{6}',color):appearance.append('color:#'+color)
            highlight=val(rp,'highlight','')
            if not neutral_colors and highlight in ('yellow','white','cyan','green','magenta','red','blue'):appearance.append('background-color:'+highlight)
            if appearance:text='<span style="'+';'.join(appearance)+'">'+text+'</span>'
            parts.append(text)
        content=''.join(parts)
        if not content:content='<br />'
        paragraphs.append('<p'+(' style="'+';'.join(css)+'"' if css else '')+'>'+content+'</p>')
        plain.append(re.sub(pattern,'',raw))
    body = ''.join(paragraphs)
    if inline_images:
        empty = r'<p(?: style="[^"]*")?>(?:\s|<br\s*/?>)*</p>'
        body = re.sub(r'(?:' + empty + r')+(?=<figure class="inline-artwork">)', '', body)
        body = re.sub(r'(?<=</figure>)(?:' + empty + r')+', '', body)
        body = re.sub(r'(?:' + empty + r')+$', '', body)
    return {'html':body,'text':'\n'.join(plain),'videos':links,'source':path.name}

def normalize_spacing(body):
    root = ET.fromstring('<div>' + body + '</div>')
    result = []
    pending_gap = False
    for node in root:
        if node.tag != 'p':
            result.append(node)
            pending_gap = False
            continue
        styles = dict(item.split(':', 1) for item in node.get('style', '').split(';') if ':' in item)
        before = float(re.sub(r'[^0-9.-]', '', styles.get('margin-top', '0')) or 0) > 0
        after = float(re.sub(r'[^0-9.-]', '', styles.get('margin-bottom', '0')) or 0) > 0
        if not ''.join(node.itertext()).strip():
            pending_gap = True
            continue
        for prop in ('margin-top', 'margin-bottom', 'line-height'):
            styles.pop(prop, None)
        if styles: node.set('style', ';'.join(f'{k}:{v}' for k,v in styles.items()))
        else: node.attrib.pop('style', None)
        if result and result[-1].tag == 'p' and (pending_gap or before):
            node.set('class', 'paragraph-gap')
        result.append(node)
        pending_gap = after
    return ''.join(ET.tostring(node, encoding='unicode', method='xml') for node in result)

SECTION_STARTS = {
    'tejido-conectivo': {
        'es': ('Biotextiles con Memoria', 'Tejido Conectivo es una obra'),
        'en': ('Biotextiles with Memory', 'Connective Tissue (Tejido Conectivo) is a work'),
    },
    'los-amantes': {
        'es': ('Los Amantes: Ellos son dos', 'Pinceladas en la búsqueda'),
        'en': ('The lovers:', 'Strokes looking for Ensō'),
    },
}
def apply_section_spacing(body, slug, lang):
    prefixes = SECTION_STARTS.get(slug, {}).get(lang, ())
    if not prefixes: return body
    root = ET.fromstring('<div>' + body + '</div>')
    matched = 0
    for p in root.findall('p'):
        text = ' '.join(''.join(p.itertext()).split())
        if any(text.startswith(prefix) for prefix in prefixes):
            classes = p.get('class', '').split()
            if 'section-gap' not in classes: classes.append('section-gap')
            p.set('class', ' '.join(classes))
            matched += 1
    assert matched == len(prefixes), (slug, lang, matched)
    return ''.join(ET.tostring(node, encoding='unicode', method='xml') for node in root)

def main():
    ap=argparse.ArgumentParser();ap.add_argument('source',type=Path);ap.add_argument('--ofrendas-source',type=Path);ap.add_argument('--despliegue-source',type=Path);args=ap.parse_args()
    result={}
    dirs=sorted(p for p in args.source.iterdir() if p.is_dir())
    assert len(dirs)==25
    for i,(d,slug,es) in enumerate(zip(dirs,SLUGS,ES),1):
        if slug=='ofrendas' and args.ofrendas_source: d=args.ofrendas_source
        files=[f for f in d.glob('*.docx') if 'ficha' not in f.name.lower()]
        spanish=next(f for f in files if norm(f.stem)==norm(es))
        english=next(f for f in files if f!=spanish)
        assert len(files)==2,(d,files)
        if slug=='fases-y-despliegue' and args.despliegue_source:
            spanish=args.despliegue_source/'Fases y Despliegue.docx'
            english=args.despliegue_source/'Phases and Unfolding.docx'
        result[slug]={'es':parse(spanish,slug=='ofrendas',OFRENDAS_IMAGES if slug=='ofrendas' else None),'en':parse(english,slug=='ofrendas',OFRENDAS_IMAGES if slug=='ofrendas' else None)}
        for lang, (old, new) in EDITORIAL_REPLACEMENTS.get(slug, {}).items():
            for field in ('html', 'text'):
                result[slug][lang][field] = result[slug][lang][field].replace(old, new.replace('\n', '<br />') if field == 'html' else new)
        if slug != 'trazas':
            for lang in ('es','en'):
                result[slug][lang]['html'] = apply_section_spacing(normalize_spacing(result[slug][lang]['html']), slug, lang)
        # Both language versions refer to the same artwork videos.
        videos=list(dict.fromkeys(result[slug]['es']['videos']+result[slug]['en']['videos']))
        if slug=='ofrendas': videos=videos[:1]
        for lang in ('es','en'):
            result[slug][lang]['links']=[{'url':url,'kind':'video' if any(host in url for host in ('youtube.com/','youtu.be/','cifra.com/')) else 'website'} for url in videos]
            del result[slug][lang]['videos']
    Path('src/work-texts.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n')
    print(f'Imported {len(result)*2} documents')
if __name__=='__main__':main()
