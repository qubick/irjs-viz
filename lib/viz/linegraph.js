var jade = require('jade')

module.exports = function(data) {

	var lines = []
	//var circles = []

	for(var i=0; i<data.length-1; i++){
	//data.forEach(function(h,i) {
        var line = {
            x1: data[i]*2, //scaling
            y1: data[i]*2,
            x2: data[i+1]*2,
            y2: data[i+1]*2
        }
        lines.push(line)
		 }

    var html = jade.renderFile(__dirname + '/templates/linegraph.jade', {
        data: lines,
        h: 150,
        w: 500
    })
    // console.log(html)
    
    return html
}
