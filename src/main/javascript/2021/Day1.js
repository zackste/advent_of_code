// Personal challenge: solve each problem using a single line of code in JavaScript.

// https://adventofcode.com/2021/day/1
// https://adventofcode.com/2021/day/1/input

// 1.
let a = 0;document.getElementsByTagName('pre')[0].innerText.split('\n').reduce((t,c)=>{if (c !== "" && !isNaN(c) && parseInt(c)>t){a++};return c},Infinity);a

// 1548

//2.
let t = document.getElementsByTagName('pre')[0].innerText.split('\n');a = 0;b = [];for (let i = 0; i < t.length - 2; i++){b.push(parseInt(t[i])+parseInt(t[i+1])+parseInt(t[i+2]))};b.reduce((t,c)=>{if (c>t){a++};return c},Infinity);a

//1589
