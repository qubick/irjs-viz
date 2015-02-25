var jade = require('jade')

module.exports = function(data) {

	console.log('hellow table!')
	var rows = []
	//var cnt = 0
	var row = []

	data.forEach(function(row, i){
		row.forEach(function(col, j){
			row[j] = {
				//td[i]: d[i++]
				td: col
			}	
	//cnt++
		//var rowStr = "\ttr\n\t\ttd " + d[0] + "\n\t\ttd " + d[1]
		})
		rows.push(row)
		console.log(row)
	})

	//console.log(rows)
	var html = jade.renderFile(__dirname + '/templates/table.jade', {
			data: rows,
			//length: cnt
    })
    
	 // console.log(html)
    
    return html
}
