// Personal challenge: single line of javascript that can drop into the live debugger

// https://adventofcode.com/2023/day/7
// https://adventofcode.com/2023/day/7/input

// 1.
document.body.innerText.split('\n').filter(a=>a).map(r=>((a,gcl)=>({'h':a[0],'b':parseInt(a[1]),'hs':a[0].replace(/A/g,'Z').replace(/K/g,'Y').replace(/T/g,'B'),'c':gcl(Object.entries([...a[0]].reduce((a,c)=>({...a,[c]:(a[c]??0)+1}),{})))}))(r.split(/ +/),gcl=>gcl.length==5?1:gcl.length==4?2:gcl.length==1?7:gcl.length==2?(gcl.reduce((a,c)=>c[1]>a?c[1]:a,0)==4?6:5):(gcl.length==3&&gcl.reduce((a,c)=>c[1]>a?c[1]:a,0)==3?4:3))).sort((a,b)=>a.c<b.c?-1:a.c>b.c?1:a.hs.localeCompare(b.hs)).reduce((a,c,i)=>c.b*(i+1)+a,0)
//253954294

// 2.
