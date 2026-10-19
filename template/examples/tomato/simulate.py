"""教学模型：归一化风味响应，不代表真实烹饪或人体试吃。仅用 Python 标准库。"""
from pathlib import Path
import random,math,csv,json
ROOT=Path(__file__).resolve().parents[2]
OUT=ROOT/'public/tomato'
OUT.mkdir(parents=True,exist_ok=True)
rng=random.Random(20261019)
rows=[]
for i in range(200):
 m=rng.uniform(.65,1.35)
 mh=max(.1,m+rng.gauss(0,.03))
 # z1=u1/m, z2=u2/m; desired response is (.8,.3).
 controls={'固定原配方':(.8,0),'固定加辣椒':(.8,.3),'仅调整基础调味':(.8*mh,.3),'配比协同调节':(.8*mh,.3*mh)}
 for method,(u1,u2) in controls.items():
  z1,z2=u1/m,u2/m
  err=math.sqrt((z1-.8)**2+(z2-.3)**2)
  rows.append(dict(batch=i+1,method=method,m=m,m_hat=mh,u1=u1,u2=u2,z1=z1,z2=z2,error=err))
with (ROOT/'examples/tomato/results.csv').open('w',newline='',encoding='utf-8-sig') as f:
 w=csv.DictWriter(f,fieldnames=list(rows[0]));w.writeheader();w.writerows(rows)
summary=[]
for name in controls:
 v=sorted(r['error'] for r in rows if r['method']==name)
 summary.append(dict(method=name,rmse=math.sqrt(sum(x*x for x in v)/len(v)),p95=v[math.ceil(.95*len(v))-1]))
(ROOT/'examples/tomato/summary.json').write_text(json.dumps(summary,ensure_ascii=False,indent=2),encoding='utf-8')
# Exact SVG charts with editable labels. No external image or plotting library.
blue='#003caa';red='#c80000'
def svg(body,w=760,h=350):return f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}"><rect width="100%" height="100%" fill="white"/><g font-family="Microsoft YaHei,微软雅黑" fill="{blue}">{body}</g></svg>'
body='<text x="25" y="27" font-size="20" font-weight="bold">教学模型：测试集风味偏差 RMSE（越低越好）</text>'
for i,s in enumerate(summary):
 y=66+i*58;length=s['rmse']/.45*420;color=red if i==3 else blue
 body+=f'<text x="20" y="{y+22}" font-size="17">{s["method"]}</text><rect x="190" y="{y}" width="{length:.2f}" height="29" fill="{color}"/><text x="{200+length:.2f}" y="{y+22}" font-size="18">{s["rmse"]:.3f}</text>'
body+='<text x="25" y="329" font-size="15" fill="#657697">随机种子 20261019；200 批次；所有数值仅来自教学仿真。</text>'
(OUT/'comparison.svg').write_text(svg(body),encoding='utf-8')
body='<text x="25" y="27" font-size="20" font-weight="bold">原料扰动下的响应误差</text><path d="M75 55 V275 H700" fill="none" stroke="#7c8ba8"/>'
for name,color in [('固定加辣椒',blue),('配比协同调节',red)]:
 for r in rows:
  if r['method']!=name:continue
  x=75+(r['m']-.65)/.7*610;y=275-min(r['error'],.55)/.55*200
  body+=f'<circle cx="{x:.2f}" cy="{y:.2f}" r="2.3" fill="{color}" opacity=".5"/>'
body+='<text x="250" y="310" font-size="17">原料扰动 m（归一化）</text><text x="80" y="50" font-size="16">风味偏差</text><text x="80" y="297" font-size="14">0.65</text><text x="660" y="297" font-size="14">1.35</text><text x="430" y="60" font-size="16">蓝：固定加辣椒</text><text x="430" y="83" font-size="16" fill="#c80000">红：配比协同调节</text>'
(OUT/'robustness.svg').write_text(svg(body),encoding='utf-8')
print(json.dumps(summary,ensure_ascii=False))
