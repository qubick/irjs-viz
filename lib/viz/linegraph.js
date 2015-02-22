// var jade = require('jade')

// module.exports = function(data) {

//     var html = jade.renderFile(__dirname + '/templates/linegraph.jade', {
//         data: data
//     })
//     // console.log(html)
    
//     return html
// }
var jade = require('jade')

module.exports = function(data) {

	var lines = []
	//var circles = []

	data.forEach(function(h,i) {
        var line = {
            x1: h,
            y1: h,
            x2: 2*h,
            y2: 2*h
        }
        lines.push(line)
    })

    var html = jade.renderFile(__dirname + '/templates/linegraph.jade', {
        data: lines,
        h: 150,
        w: 500
    })
    // console.log(html)
    
    return html
}