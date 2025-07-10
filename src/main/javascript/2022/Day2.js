// Personal challenge: single line of javascript that can drop into the live debugger

// https://adventofcode.com/2022/day/2
// https://adventofcode.com/2022/day/2/input

// 1.
let t = document.getElementsByTagName('pre')[0].innerText.split('\n').filter((z)=>z.length>0),a = 0;t.reduce((tt,c)=>{let e=c.charCodeAt(0)-65,m=c.charCodeAt(2)-65-23;return tt+(m-e+4)%3*3+m+1},0)
//12276

// 2.
let t = document.getElementsByTagName('pre')[0].innerText.split('\n').filter((z)=>z.length>0),a = 0;t.reduce((tt,c)=>{let e=c.charCodeAt(0)-65,m=c.charCodeAt(2)-65-23;return tt+(m+e+2)%3+1+m*3},0)
//9975