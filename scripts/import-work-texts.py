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
def parse(path, neutral_colors=False):
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
    return {'html':''.join(paragraphs),'text':'\n'.join(plain),'videos':links,'source':path.name}

def main():
    ap=argparse.ArgumentParser();ap.add_argument('source',type=Path);args=ap.parse_args()
    result={}
    dirs=sorted(p for p in args.source.iterdir() if p.is_dir())
    assert len(dirs)==25
    for i,(d,slug,es) in enumerate(zip(dirs,SLUGS,ES),1):
        files=[f for f in d.glob('*.docx') if 'ficha' not in f.name.lower()]
        spanish=next(f for f in files if norm(f.stem)==norm(es))
        english=next(f for f in files if f!=spanish)
        assert len(files)==2,(d,files)
        result[slug]={'es':parse(spanish,slug=='ofrendas'),'en':parse(english,slug=='ofrendas')}
        # Both language versions refer to the same artwork videos.
        videos=list(dict.fromkeys(result[slug]['es']['videos']+result[slug]['en']['videos']))
        if slug=='ofrendas': videos=videos[:1]
        for lang in ('es','en'):
            result[slug][lang]['links']=[{'url':url,'kind':'video' if any(host in url for host in ('youtube.com/','youtu.be/','cifra.com/')) else 'website'} for url in videos]
            del result[slug][lang]['videos']
    Path('src/work-texts.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n')
    print(f'Imported {len(result)*2} documents')
if __name__=='__main__':main()
