// Personal challenge: single line of javascript that can drop into the live debugger

// https://adventofcode.com/2022/day/5
// https://adventofcode.com/2022/day/5/input

// 1.
let [s,t] = document.getElementsByTagName('pre')[0].innerText.split('\n\n').filter((z)=>z.length>0),a=[];let b=s.split('\n');for (let i=1;i<b[b.length-1].length;i+=4){let c=[];for(let j=0;j<b.length-1;j++){if(b[j].charAt(i)!=' '){c.push(b[j].charAt(i))}};a.push(c.reverse())};t.split('\n').filter((a)=>a.length>0).forEach((d)=>{let p=d.split(' ');for(let e=0;e<parseInt(p[1]);e++){a[parseInt(p[5])-1].push(a[parseInt(p[3])-1].pop())}});a.map((b)=>b[b.length-1]).join('')
//FJSRQCFTN

// 2.
let [s,t] = document.getElementsByTagName('pre')[0].innerText.split('\n\n').filter((z)=>z.length>0),a=[];let b=s.split('\n');for (let i=1;i<b[b.length-1].length;i+=4){let c=[];for(let j=0;j<b.length-1;j++){if(b[j].charAt(i)!=' '){c.push(b[j].charAt(i))}};a.push(c.reverse())};t.split('\n').filter((a)=>a.length>0).forEach((d)=>{let p=d.split(' ');/*for(let e=0;e<parseInt(p[1]);e++){a[parseInt(p[5])-1].push(a[parseInt(p[3])-1].pop())}*/a[parseInt(p[5])-1].push(... a[parseInt(p[3])-1].splice(-1*parseInt(p[1]),parseInt(p[1])))});a.map((b)=>b[b.length-1]).join('')
//CJVLJQPHS