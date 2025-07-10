// Personal challenge: single line of javascript that can drop into the live debugger

// https://adventofcode.com/2022/day/9
// https://adventofcode.com/2022/day/9/input

// 1.
let l=document.body.innerText;p=600;m = l.split('\n').filter((a)=>a.length>0).map((a)=>a.split(' ')).map(([a,b])=>[a,parseInt(b)]),y=[...Array(p)].map((y)=>Array(p).fill(false)),h=[0,0],t=[0,0],z=(i)=>Math.abs(h[i]-t[i]),n=()=>z(0)>1||z(1)>1,u=(d)=>{v=h.slice();if(d=='U'){h[0]-=1};if(d=='D'){h[0]+=1};if(d=='L'){h[1]-=1};if(d=='R'){h[1]+=1};if(n()){t=v;y[t[0]+(p/2)][t[1]+(p/2)]=true}};y[p/2][p/2]=true;m.forEach(([d,l])=>[...Array(l)].forEach(()=>u(d)));y.reduce((t,a)=>t+a.reduce((tt,b)=>tt+(b?1:0),0),0)
//6190
