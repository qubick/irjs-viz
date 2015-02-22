var jade = require('jade')

module.exports = function(data) {

	console.log('hellow table!')
	var rows = []

	data.forEach(function(d, i){
		/*
		var row = {
			td1: d[0],
			td2: d[1]
		}
		*/

		var rowStr = "\ttr\n\t\ttd " + d[0] + "\n\t\ttd " + d[1]
		rows.push(rowStr)
		console.log(rowStr)
	})

	//console.log(rows)
	var html = jade.renderFile(__dirname + '/templates/table.jade', {
	/*doctype html
	 html(lang="en")
	 	head
			title = "table"
		body
			h1 table chart
	 */
			data: rows
    })
    
	 // console.log(html)
    
    return html
}
