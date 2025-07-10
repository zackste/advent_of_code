// Personal challenge: single line of javascript that can drop into the live debugger

// https://adventofcode.com/2023/day/2
// https://adventofcode.com/2023/day/2/input

// 1.
document.body.innerText.split('\n').filter(a=>a).map(a=>((b)=>((c,d)=>({'Game':parseInt(b[0].match(/\d+/)[0]),'Sets':[...c.map(c=>d(c))]}))(b[1].split(';'),d=>Object.fromEntries(d.split(',').map(a=>[a.match(/[a-z]+/)[0],parseInt(a.match(/\d+/)[0])]))))(a.split(':'))).filter(a=>a.Sets.every(a=>(a['blue']??0)<=14&&(a['green']??0)<=13&&(a['red']??0)<=12)).reduce((a,b)=>b.Game+a,0)
//2685

// 2.
document.body.innerText.split('\n').filter(a=>a).map(a=>((b)=>((c,d)=>({'Game':parseInt(b[0].match(/\d+/)[0]),'Sets':[...c.map(c=>d(c))]}))(b[1].split(';'),d=>Object.fromEntries(d.split(',').map(a=>[a.match(/[a-z]+/)[0],parseInt(a.match(/\d+/)[0])]))))(a.split(':'))).map(a=>(f=>[f('blue'),f('red'),f('green')])(n=>a.Sets.reduce((a,b)=>a<(b[n]??0)?b[n]:a,0))).reduce((a,b)=>b.reduce((a,b)=>a*b,1)+a,0)
//83707



document.body.innerText.split('\n').filter(a=>a).map(a=>((b)=>({'Game':parseInt(b[0].match(/\d+/)[0]),'Sets':[...b[1].split(';').map(d=>Object.fromEntries(d.split(',').map(a=>[a.match(/[a-z]+/)[0],parseInt(a.match(/\d+/)[0])])))]}))(a.split(':'))).map(a=>(f=>[f('blue'),f('red'),f('green')])(n=>a.Sets.reduce((a,b)=>a<(b[n]??0)?b[n]:a,0))).reduce((a,b)=>b.reduce((a,b)=>a*b,1)+a,0)

document.body.innerText.split('\n').filter(a=>a).map(a=>a.split(':')[1].split(';').map(d=>Object.fromEntries(d.split(',').map(a=>[a.match(/[a-z]+/)[0],parseInt(a.match(/\d+/)[0])])))).map(a=>(f=>f('blue')*f('red')*f('green'))(n=>a.reduce((a,b)=>a<(b[n]??0)?b[n]:a,0))).reduce((a,b)=>b+a,0)

// Readable:
document.body.innerText.split('\n').filter(row=>row).map(game=>game.split(':')[1].split(';').map(handful=>Object.fromEntries(handful.split(',').map(color=>[color.match(/[a-z]+/)[0],parseInt(color.match(/\d+/)[0])])))).map(game=>(maxColor=>maxColor('blue')*maxColor('red')*maxColor('green'))(colorName=>game.reduce((accumulator,current)=>accumulator<(current[colorName]??0)?current[colorName]:accumulator,0))).reduce((accumulator,current)=>current+accumulator,0)

document.body.innerText.split('\n').filter(row=>row).map(game=>
			game.split(':')[1].split(';').map(handful=>
				Object.fromEntries(handful.split(',').map(color=>[
					color.match(/[a-z]+/)[0]
					, parseInt(color.match(/\d+/)[0])
				]))
			)
		).map(game=>
			(
				maxColor=>maxColor('blue')*maxColor('red')*maxColor('green')
			)(colorName=>
				game.reduce((accumulator,current)=>
					accumulator<(current[colorName]??0)?current[colorName]:accumulator,0
				)
			)
).reduce((accumulator,current)=>current+accumulator,0)