var jade = require('jade')

module.exports = function(data) {

	var rects = []

	data.forEach(function(h, i) {
        var rect = {
            x: 50 + 50 * i,
            height: h,
            width:40
        }
        rects.push(rect)
    })
    var html = jade.renderFile(__dirname + '/templates/barchart.jade', {
        //data: data
        data: rects,
        h: 150,
        w: 500
    })
    // console.log(html)
    
    return html
}
