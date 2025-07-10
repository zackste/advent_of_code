// Personal challenge: single line of javascript that can drop into the live debugger

// https://adventofcode.com/2022/day/6
// https://adventofcode.com/2022/day/6/input

// 1.
let [...t] = document.getElementsByTagName('pre')[0].innerText.split('\n').filter(t=>t.length>0)[0],b=[];for(let i=4;i<t.length;i++){if([...new Set(t.slice(i-4,i))].length==4){b.push(i)}};b[0]
//1816

//2.
let [...t] = document.getElementsByTagName('pre')[0].innerText.split('\n').filter(t=>t.length>0)[0],b=[];for(let i=4;i<t.length;i++){if([...new Set(t.slice(i-14,i))].length==14){b.push(i)}};b[0]
//2625

((l)=>[...document.body.innerText].findIndex((_,i,t)=>[...new Set(t.slice(i-l,i))].length==l))(14)
((l)=>[...document.body.innerText].findIndex((_,i,t)=>new Set(t.slice(i-l,i)).size==l))(14)
[...document.body.innerText].findIndex((_,i,t)=>new Set(t.slice(i-14,i)).size==14)
