var jade = require('jade')

module.exports = function(data) {

	console.log('hellow table!')
	var rows = []
	var cnt = 0

	data.forEach(function(row, i){
		var row = {
			//td[i]: d[i++]
			td1: row[0],
			td2: row[1],
			td3: row[2]
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
