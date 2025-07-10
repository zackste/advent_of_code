// Personal challenge: solve each problem using a single line of code in JavaScript.

// https://adventofcode.com/2021/day/2
// https://adventofcode.com/2021/day/2/input

// 1.
let t = document.getElementsByTagName('pre')[0].innerText.split('\n');a = 0;b = 0;t.forEach((c)=>{switch(c.split(' ')[0]){case "forward":a+=parseInt(c.split(' ')[1]);break;case "down":b+=parseInt(c.split(' ')[1]);break;case "up":b-=parseInt(c.split(' ')[1]);break;}});a*b

// 1727835

//2.
let t = document.getElementsByTagName('pre')[0].innerText.split('\n'),a = 0,b = 0,aa=0;t.forEach((r)=>{let [n,c]=r.split(' ');switch(n){case "forward":a+=parseInt(c);b+=aa*parseInt(c);break;case "down":aa+=parseInt(c);break;case "up":aa-=parseInt(c);break;}});a*b

//1544000595