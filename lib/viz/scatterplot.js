var jade = require('jade')

module.exports = function(data) {

	var pts = []
	
	data.forEach(function(d, i){
		var pt = {
			x: d[0]*5,
			y: d[1]*5
		}
		pts.push(pt);
	})

	console.log(pts)
    
	 var html = jade.renderFile(__dirname + '/templates/scatterplot.jade', {
        data: pts,
		  h: 300,
		  w: 500
    })
    // console.log(html)
    
    return html
}
