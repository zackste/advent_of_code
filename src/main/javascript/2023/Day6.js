// Personal challenge: single line of javascript that can drop into the live debugger

// https://adventofcode.com/2023/day/6
// https://adventofcode.com/2023/day/6/input

// 1.
[Object.fromEntries(document.body.innerText.split('\n').filter(a=>a).map(r=>((k,v)=>[k,v.trim().split(/ +/).map(a=>parseInt(a))])(...r.split(':'))))].map(a=>a.Distance.map((_,i)=>({d:a.Distance[i],t:a.Time[i]})))[0].map(a=>[...Array(a.t+1).keys()].map(th=>th*(a.t-th)).filter(d=>d>a.d)).reduce((a,c)=>c.length*a,1)
//505494

[Object.fromEntries(document.body.innerText.split('\n').filter(a=>a).map(r=>((k,v)=>[k,v.trim().split(/ +/).map(a=>parseInt(a))])(...r.split(':'))))].map(a=>a.Distance.map((_,i)=>({d:a.Distance[i],t:a.Time[i]})))[0].map(a=>a.t+1-2*[...Array(Math.floor(a.t/2+1)).keys()].find(th=>th*(a.t-th)>a.d)).reduce((a,c)=>c*a,1)

// 2.
[Object.fromEntries(document.body.innerText.split('\n').filter(a=>a).map(r=>((k,v)=>[k,parseInt(v.replace(/ +/g,''))])(...r.split(':'))))].map(a=>a.Time+1-2*[...Array(Math.floor(a.Time/2+1)).keys()].find(th=>th*(a.Time-th)>a.Distance))[0]
//23632299

(a=>a.Time+1-2*[...Array(Math.floor(a.Time/2+1)).keys()].find(th=>th*(a.Time-th)>a.Distance))(Object.fromEntries(document.body.innerText.split('\n').filter(a=>a).map(r=>((k,v)=>[k,parseInt(v.replace(/ +/g,''))])(...r.split(':')))))

(a=>a[0]+1-2*[...Array(Math.floor(a[0]/2+1)).keys()].find(th=>th*(a[0]-th)>a[1]))(document.body.innerText.split('\n').filter(a=>a).map(r=>parseInt(r.split(':')[1].replace(/ +/g,''))))

(a=>a[0]+1-2*Math.ceil((a[0]-Math.sqrt(Math.pow(a[0],2)-4*a[1]))/2))(document.body.innerText.split('\n').filter(a=>a).map(r=>parseInt(r.split(':')[1].replace(/ +/g,''))))