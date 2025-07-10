// Personal challenge: single line of javascript that can drop into the live debugger

// https://adventofcode.com/2022/day/1
// https://adventofcode.com/2022/day/1/input

// 1.
document.getElementsByTagName('pre')[0].innerText.split('\n\n').map((e)=>e.split('\n').reduce((t,c)=>t+parseInt(c),0)).reduce((m,c)=>c>m?c:m,0)
// Answer: 69836

// 2.
document.getElementsByTagName('pre')[0].innerText.split('\n\n').map((e)=>e.split('\n').reduce((t,c)=>t+parseInt(c),0)).filter((a)=>!isNaN(a)).sort((a,b)=>a-b).splice(-3).reduce((t,c)=>t+c,0)
// Answer: 207968