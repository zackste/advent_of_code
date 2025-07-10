// Personal challenge: single line of javascript that can drop into the live debugger

// https://adventofcode.com/2023/day/5
// https://adventofcode.com/2023/day/5/input

// 1.
((a,f)=>a.seeds[0].map(s=>f(s,a['seed-to-soil map'])).map(s=>f(s,a['soil-to-fertilizer map'])).map(s=>f(s,a['fertilizer-to-water map'])).map(s=>f(s,a['water-to-light map'])).map(s=>f(s,a['light-to-temperature map'])).map(s=>f(s,a['temperature-to-humidity map'])).map(s=>f(s,a['humidity-to-location map'])))(Object.fromEntries(document.body.innerText.split('\n\n').map(a=>(([a,b])=>[a,b.split('\n').filter(a=>a).map(a=>a.split(/ +/).filter(a=>a).map(a=>parseInt(a)))])(a.split(':')))),(x,f)=>f.filter(m=>m[1]<=x&&x<=(m[1]+m[2])).map(m=>x-m[1]+m[0])[0]??x).reduce((a,c)=>a?(a<c?a:c):c,null)
//178159714

