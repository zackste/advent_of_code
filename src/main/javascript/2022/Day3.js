// Personal challenge: single line of javascript that can drop into the live debugger

// https://adventofcode.com/2022/day/3
// https://adventofcode.com/2022/day/3/input

// 1.
let t = document.getElementsByTagName('pre')[0].innerText.split('\n').filter((z)=>z.length>0),a=[];t.forEach((i)=>{for(let j=0;j<i.length/2;j++){if(i.substring(i.length/2).indexOf(i.charAt(j))>=0){a.push(i.charCodeAt(j)-(i.charCodeAt(j)>96?96:38));break}}});a.reduce((t,c)=>t+c,0)
//8243

// 2.
let t = document.getElementsByTagName('pre')[0].innerText.split('\n').filter((z)=>z.length>0),a=[];for(let k=0;k<t.length;k+=3){for(let j=0;j<t[k].length;j++){if(t[k+1].indexOf(t[k].charAt(j))>=0&&t[k+2].indexOf(t[k].charAt(j))>=0){a.push(t[k].charCodeAt(j)-(t[k].charCodeAt(j)>96?96:38));break}}};a.reduce((t,c)=>t+c,0)
//2631