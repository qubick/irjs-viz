var jade = require('jade')

module.exports = function(data) {

	var rects = []
	var max = 0
    var value1 = data[0]//The first value is read in as the bar that will be changed
    var value2 = data[1]//The second value is read in as the bar width
    var value3 = data[2]//The third value is read in as the margin width
//    var min = data[0]
//    console.log(min)
	// var color = ['red','yellow','green','blue','purple', 'skyblue', 'pink']
    var color = ['blue','green','blue','green','blue', 'green', 'blue', 'green', 'blue']
	
	for(var i=3; i<data.length; i++){
		if(max<data[i])
			max = data[i]
 //       if(min>h)
 //           min = h
        if(i==(value1+2))
        {
            color[i]='red'
        }
        
		  var rect = {
            x: 50 + (value2+value3) * (i-3),
            height_origin: data[i],
				height: data[i],
            width:value2,
			color:color[i]
        }
        rects.push(rect)
    }

	//normalization to 0~100
	 rects.forEach(function(d, i){
	 	d.height = d.height*100/max
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
