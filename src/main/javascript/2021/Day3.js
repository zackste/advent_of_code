// Personal challenge: solve each problem using a single line of code in JavaScript.

// https://adventofcode.com/2021/day/3
// https://adventofcode.com/2021/day/3/input

// 1.
let t = document.getElementsByTagName('pre')[0].innerText.split('\n').filter((z)=>z.length>0),a = [];for (let i=0;i<t[0].length; i++) {a[i]=[0,0];for (let j of t) {a[i][parseInt(j.charAt(i))]+=1}};parseInt(a.map(([z,o])=>z>o?0:1).join(""),2)*parseInt(a.map(([z,o])=>z>o?1:0).join(""),2)
// 3549854
