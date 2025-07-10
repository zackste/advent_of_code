// Personal challenge: single line of javascript that can drop into the live debugger

// https://adventofcode.com/2022/day/8
// https://adventofcode.com/2022/day/8/input

// 1.
let t = document.body.innerText.split('\n').map((t)=>[...t].map((t)=>parseInt(t))),n=(t,r,c)=>t.slice(0,r).findIndex((e)=>e[c]>=t[r][c])>=0&&t.slice(r+1,t.length).findIndex((e)=>e[c]>=t[r][c])>=0&&t[r].slice(0,c).findIndex((e,i)=>i!=c&&e>=t[r][c])>=0&&t[r].slice(c+1,t[r].length).findIndex((e,i)=>i!=c&&e>=t[r][c])>=0,b=0;for(let r=0;r<t.length;r++){for(let c=0;c<t[r].length;c++){b+=n(t,r,c)?0:1}};b
//1705

//2.
let t = document.body.innerText.split('\n').map((t)=>[...t].map((t)=>parseInt(t))),m=(v,i,d)=>Math.abs(v-(i==-1?d:i)),n=(t,r,c)=>[m(r,t.findLastIndex((e,i)=>i<r&&e[c]>=t[r][c]),0),m(r,t.findIndex((e,i)=>i>r&&e[c]>=t[r][c]),t.length-1),m(c,t[r].findLastIndex((e,i)=>i<c&&e>=t[r][c]),0),m(c,t[r].findIndex((e,i)=>i>c&&e>=t[r][c]),t[r].length-1)],b=[];for(let r=0;r<t.length;r++){for(let c=0;c<t[r].length;c++){b.push(n(t,r,c).reduce((t,c)=>t*c,1))}};b.reduce((t,c)=>c>t?c:t,0)
//371200


//Shortening 1.
document.body.innerText.split('\n').map((t)=>[...t].map((t)=>parseInt(t))).reduce((a,s,r)=>a+s.reduce((b,_,c)=>b+(t.findLastIndex((e,i)=>i<r&&e[c]>=t[r][c])>=0&&t.findIndex((e,i)=>i>r&&e[c]>=t[r][c])>=0&&t[r].findLastIndex((e,i)=>i<c&&e>=t[r][c])>=0&&t[r].findIndex((e,i)=>i>c&&e>=t[r][c])>=0?0:1),0),0)
