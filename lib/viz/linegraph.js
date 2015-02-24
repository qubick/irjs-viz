var jade = require('jade')

module.exports = function(data) {

	var lines = []

	//data.forEach(function(d,i) {
	for(var i=0; i<data.length-1; i++){
		d1 = data[i]
		d2 = data[i+1]
      var line = {
            x1: d1[0]*5, //scaling
            y1: d1[1]*5,
            x2: d2[0]*5,
            y2: d2[1]*5
        }
        lines.push(line)
		 }

    var html = jade.renderFile(__dirname + '/templates/linegraph.jade', {
        data: lines,
        h: 300,
        w: 400
    })
    // console.log(html)
    
    return html
}
