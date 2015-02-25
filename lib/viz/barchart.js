var jade = require('jade')

module.exports = function(data) {

	var rects = []
	var max = 0
    var min = data[0]
    console.log(min)
	var color = ['red','yellow','green','blue','purple', 'skyblue', 'pink']
	
	data.forEach(function(h, i) {
		if(max<h)
			max = h
        if(min>h)
            min = h
        
		  var rect = {
            x: 50 + 50 * i,
            height_origin: h,
				height: h,
            width:40,
			color:color[i]
        }
        rects.push(rect)
    })

	//normalization to 0~100
	 rects.forEach(function(d, i){
	 	d.height = (d.height-min)*100/(max-min)
		console.log('normalized to range 0 ~ 100: ', d.height)
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
