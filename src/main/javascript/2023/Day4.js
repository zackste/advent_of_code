// Personal challenge: single line of javascript that can drop into the live debugger

// https://adventofcode.com/2023/day/4
// https://adventofcode.com/2023/day/4/input

// 1.
document.body.innerText.split('\n').filter(a=>a).map(r=>((m)=>({'i':parseInt(m.groups['i'].trim()),'w':m.groups['w'].trim().split(/ +/).map(a=>parseInt(a)),'c':m.groups['c'].trim().split(/ +/).map(a=>parseInt(a))}))(r.match(/Card +(?<i>\d+):(?<w>( +(\d+))+) \|(?<c>( +\d+)+)/))).map(r=>r.c.filter(c=>r.w.indexOf(c)>=0).length).filter(r=>r>0).reduce((a,c)=>Math.pow(2,c-1)+a,0)
//21158

// 2. **
Object.values([].concat(...Object.values(document.body.innerText.split('\n').filter(a=>a).map(r=>((m)=>({'i':parseInt(m.groups['i'].trim()),'w':m.groups['w'].trim().split(/ +/).map(a=>parseInt(a)),'c':m.groups['c'].trim().split(/ +/).map(a=>parseInt(a))}))(r.match(/Card +(?<i>\d+):(?<w>( +(\d+))+) \|(?<c>( +\d+)+)/))).map(r=>r.c.filter(c=>r.w.indexOf(c)>=0).length).reduce((a,c,i,z)=>({...a,[i]:[i].concat([...Array(c).keys()].map(k=>k+1+i))}),{}))).reduce((a,c)=>({...a,[c]:(a[c]||0)+1}),{})).reduce((a,c)=>a+c,0)


(o=>(Object.keys(o).map(k=>[...Array(o[k].w).keys()].reduce((a,z)=>o[k].n.reduce((a,c)=>o[c].c++,{}),{}))==-1)||o)(Object.fromEntries(document.body.innerText.split('\n').filter(a=>a).map(r=>((m)=>({'i':parseInt(m.groups['i'].trim()),'w':m.groups['w'].trim().split(/ +/).map(a=>parseInt(a)),'c':m.groups['c'].trim().split(/ +/).map(a=>parseInt(a))}))(r.match(/Card +(?<i>\d+):(?<w>( +(\d+))+) \|(?<c>( +\d+)+)/))).map(r=>r.c.filter(c=>r.w.indexOf(c)>=0).length).map((w,i)=>[i,{'c':(w>0?1:0),'n':[...Array(w).keys()].map(k=>i+k+1)}])))

