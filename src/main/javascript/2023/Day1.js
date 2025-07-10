// Personal challenge: single line of javascript that can drop into the live debugger

// https://adventofcode.com/2023/day/1
// https://adventofcode.com/2023/day/1/input

// 1.
document.body.innerText.split('\n').map(e=>parseInt(e.match(/(?<=^\D*)\d/)+e.match(/\d(?=\D*$)/))).reduce((a,b)=>a+b)
//53921

// 2.
((a,z)=>document.body.innerText.split('\n').map(e=>parseInt(""+z(a,""+e.match(RegExp('\\d|'+a.join('|'),'i')))+z(a,e.split('').reverse().join('').match(RegExp('\\d|'+a.join('|').split('').reverse().join(''),'i'))?.toString().split('').reverse().join('')))).reduce((a,b)=>a+b))(['one','two','three','four','five','six','seven','eight','nine'],(a,n)=>isNaN(n)?a.indexOf(n)+1:n)
//54676

// ((a,z,r)=>document.body.innerText.split('\n').filter(l=>l).map(e=>parseInt(""+z(a,""+e.match(RegExp('\\d|'+a,'i')))+z(a,r(r(e).match(RegExp('\\d|'+r(a),'i')))))).reduce((a,b)=>a+b))('one|two|three|four|five|six|seven|eight|nine',(a,n)=>isNaN(n)?a.split('|').indexOf(n)+1:n,s=>s.toString().split('').reverse().join(''))