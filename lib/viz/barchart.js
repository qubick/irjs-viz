var jade = require('jade')

module.exports = function(data) {

	var rects = []
	var color = ['red','yellow','green','blue','purple', 'skyblue', 'pink']
    var max = data[0]
    var min = data[0]
    for(var i=0; i<data.length; i++){
        if(data[i]> max)
        {
            max = data[i]
        }
        if(data[i]<min)
        {
            min = data[i]
        }

    }
    var ax = (100/(max-min))
    console.log(ax)
	for(var i=0; i<data.length; i++){
        var rect = {
            x: 50 + 50 * i,
            height: ax*data[i]-min,
            width:40,
			color:color[i]
        }
        rects.push(rect)
    }
    var html = jade.renderFile(__dirname + '/templates/barchart.jade', {
        //data: data
        data: rects,
        h: 150,
        w: 500
    })
    // console.log(html)
    
    return html
}
