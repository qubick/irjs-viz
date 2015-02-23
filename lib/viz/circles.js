var jade = require('jade')

module.exports = function(data) {

    var circles = []
	var color = ['red','yellow','green','blue','purple','pink']
	 data.forEach(function(d, i) {
	 	//var color = 255-i;
		//color = '#' + color.toString()

        var circle = {
            x: 50 + 50 * i,
            y: 50,
            r: d,
				color: color[i]
        }
        circles.push(circle)
		  console.log(circle)
    })

    var html = jade.renderFile(__dirname + '/templates/circles.jade', {
        data: circles,
        h: 200,
        w: 500
    })
    // console.log(html)

    return html
}
