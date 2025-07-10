// Personal challenge: single line of javascript that can drop into the live debugger

// https://adventofcode.com/2022/day/7
// https://adventofcode.com/2022/day/7/input

// 1.
let t=document.body.innerText.split('\n'),b=a={},c=[],d=($)=>Object.values($).reduce((t,c)=>t+(isNaN(c)?d(c):c),0),e=($)=>Object.values($).reduce((t,c)=>isNaN(c)?[...t,c,...e(c)]:t,[]);t.forEach((u)=>{[$,$$,p]=u.split(' ');if($=='$'){if($$=='cd'){if(p=='/'){b=a;c=[]}else if(p=='..'){b=c.pop()}else{c.push(b);b=b[p]}}}else b[$$]=$=='dir'?{}:parseInt($)});e(a).map(($)=>d($)).filter(($)=>$<=100000).reduce((t,c)=>t+c,0)
//1348005

let t=document.body.innerText.split('\n'),b=a={},c=[],d=($)=>Object.values($).reduce((t,c)=>t+(isNaN(c)?d(c):c),0),e=($)=>Object.values($).reduce((t,c)=>isNaN(c)?[...t,c,...e(c)]:t,[]);t.forEach((u)=>{[$,$$,p]=u.split(' ');if($=='$'){if($$=='cd'){if(p=='/'){b=a;c=[]}else if(p=='..'){b=c.pop()}else{c.push(b);b=b[p]}}}else b[$$]=$=='dir'?{}:parseInt($)});let z=30000000-(70000000-d(a));e(a).map(($)=>d($)).filter(($)=>$>=z).sort((a,b)=>a-b)[0]
//12785886