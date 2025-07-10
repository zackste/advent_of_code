// Personal challenge: single line of javascript that can drop into the live debugger

// https://adventofcode.com/2022/day/10
// https://adventofcode.com/2022/day/10/input

// 1.
let c=[1],x=1,t=document.body.innerText.split('\n').filter((t)=>t.length>0).map((t)=>t.split(' '));t.forEach(([a,b])=>{if(a=="noop"){c.push(x)}else{c.push(x);c.push(x);x+=parseInt(b)}});[20,60,100,140,180,220].reduce((t,n)=>t+n*c[n],0)
//13180

// 2.
let a="",c=[],x=1,t=document.body.innerText.split('\n').filter((t)=>t.length>0).map((t)=>t.split(' '));t.forEach(([a,b])=>{if(a=="noop"){c.push(x)}else{c.push(x);c.push(x);x+=parseInt(b)}});for(let i=0;i<c.length;i++){a+=(c[i]-1)<=(i%40)&&(c[i]+1)>=(i%40)?"#":".";if(i%40==39){a+='\n'}};a
/*
####.####.####..##..#..#...##..##..###..
#.......#.#....#..#.#..#....#.#..#.#..#.
###....#..###..#....####....#.#..#.###..
#.....#...#....#....#..#....#.####.#..#.
#....#....#....#..#.#..#.#..#.#..#.#..#.
####.####.#.....##..#..#..##..#..#.###..
EZFCHJAB
*/