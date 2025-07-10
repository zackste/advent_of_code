// Personal challenge: single line of javascript that can drop into the live debugger

// https://adventofcode.com/2023/day/3
// https://adventofcode.com/2023/day/3/input

// 1.
document.body.innerText.split('\n').filter(a=>a).map((r,i,a)=>[...r.matchAll(/\d+/g)].filter(m=>((i<=0?'':a[i-1].substring(Math.max(m.index-1,0),Math.min(a[i-1].length,m.index+m[0].length+1)))+(m.index<=0?'':r[m.index-1])+(m.index+m[0].length>=r.length?'':r[m.index+m[0].length])+(i+1>=a.length?'':a[i+1].substring(Math.max(m.index-1,0),Math.min(a[i+1].length,m.index+m[0].length+1)))).match(/[^0-9.]/)).reduce((a,m)=>a+parseInt(m),0)).reduce((a,r)=>a+r,0)
//512794

document.body.innerText.split('\n').filter(a=>a).map((r,i,a)=>[...r.matchAll(/\d+/g)].filter(m=>((i<=0?'':a[i-1].substring(Math.max(m.index-1,0),Math.min(a[i-1].length,m.index+m[0].length+1)))+(r.substring(Math.max(m.index-1,0),Math.min(r.length,m.index+m[0].length+1)))+(i+1>=a.length?'':a[i+1].substring(Math.max(m.index-1,0),Math.min(a[i+1].length,m.index+m[0].length+1)))).match(/[^0-9.]/)).reduce((a,m)=>a+parseInt(m),0)).reduce((a,r)=>a+r,0)

// 2.
Object.entries([].concat(...document.body.innerText.split('\n').filter(a=>a).map((r,i,a)=>[...r.matchAll(/\d+/g)].map(m=>[m,[[(i-1),[...(i<=0?'':a[i-1].substring(Math.max(m.index-1,0),Math.min(a[i-1].length,m.index+m[0].length+1))).matchAll(/\*/g)].map(a=>a.index+Math.max(m.index-1,0))],[i,[...(r.substring(Math.max(m.index-1,0),Math.min(r.length,m.index+m[0].length+1))).matchAll(/\*/g)].map(a=>a.index+Math.max(m.index-1,0))],[(i+1),[...(i+1>=a.length?'':a[i+1].substring(Math.max(m.index-1,0),Math.min(a[i+1].length,m.index+m[0].length+1))).matchAll(/\*/g)].map(a=>a.index+Math.max(m.index-1,0))]].filter(a=>a[1].length>0)]).filter(a=>a[1].length>0).map(m=>[`${m[1][0][0]},${m[1][0][1][0]}`,parseInt(m[0])]))).reduce((a,c)=>({...a,[c[0]]:[...(a[c[0]]||[]),c[1]]}),{})).filter(a=>a[1].length==2).reduce((a,c)=>a+c[1][0]*c[1][1],0)
//67779080


Object.entries([].concat(...document.body.innerText.split('\n').filter(a=>a).map((r,i,a)=>[...r.matchAll(/\d+/g)].map(m=>((s,t)=>[m,[[(i-1),t(i<=0?[]:s(a[i-1]))],[i,t(s(r))],[(i+1),t(i+1>=a.length?[]:s(a[i+1]))]].filter(a=>a[1].length>0)])(s=>[...s.substring(Math.max(m.index-1,0),Math.min(s.length,m.index+m[0].length+1)).matchAll(/\*/g)],t=>t.map(a=>a.index+Math.max(m.index-1,0)))).filter(a=>a[1].length>0).map(m=>[`${m[1][0][0]},${m[1][0][1][0]}`,parseInt(m[0])]))).reduce((a,c)=>({...a,[c[0]]:[...(a[c[0]]||[]),c[1]]}),{})).filter(a=>a[1].length==2).reduce((a,c)=>a+c[1][0]*c[1][1],0)