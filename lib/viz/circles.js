var jade = require('jade')

module.exports = function(data) {

    var circles = []
	var color = ['red','yellow','green','blue','purple','pink', 'orange', 'grass']
	 for(var i=0; i<data.length; i++)
     {
	 	//var color = 255-i;
		//color = '#' + color.toString()
        var sum = 0
        for(var j=1;j<=i; j++)
        {
            sum = sum + 2*data[j-1]
        }
        var circle = {
            x: sum + 20*(i+1) + data[i],
            y: 50,
            r: data[i],
			color: color[i]
        }
        circles.push(circle)
		console.log(circle)
    }

    var html = jade.renderFile(__dirname + '/templates/circles.jade', {
        data: circles,
        h: 200,
        w: 600
    })
    // console.log(html)

    return html
}
