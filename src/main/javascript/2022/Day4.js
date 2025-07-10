// Personal challenge: single line of javascript that can drop into the live debugger

// https://adventofcode.com/2022/day/4
// https://adventofcode.com/2022/day/4/input

// 1.
let t = document.getElementsByTagName('pre')[0].innerText.split('\n').filter((z)=>z.length>0),a=0;t.map(s=>(([ll,lu,rl,ru])=>ll<=rl&&ru<=lu||rl<=ll&&lu<=ru?1:0)(s.replace(',','-').split('-').map((p)=>parseInt(p)))).reduce((t,z)=>t+z,0)
//605

// 2.
let t = document.getElementsByTagName('pre')[0].innerText.split('\n').filter((z)=>z.length>0),a=0;t.map(s=>(([ll,lu,rl,ru])=>lu>=rl&&ll<=ru||ru>=ll&&rl<=lu?1:0)(s.replace(',','-').split('-').map((p)=>parseInt(p)))).reduce((t,z)=>t+z,0)
//914