var jade = require('jade')

module.exports = function(data) {

	console.log('hellow table!')
	var rows = []
	var cnt = 0;

	data.forEach(function(d, i){
		//while(i < d.length)
			var row = {
				//td[i]: d[i++]
				td: d
			}
		cnt++
		//var rowStr = "\ttr\n\t\ttd " + d[0] + "\n\t\ttd " + d[1]
		rows.push(row)
		console.log(row)
	})

	//console.log(rows)
	var html = jade.renderFile(__dirname + '/templates/table.jade', {
			data: rows,
			length: cnt
    })
    
	 // console.log(html)
    
    return html
}
