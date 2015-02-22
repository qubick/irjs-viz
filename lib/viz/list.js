var jade = require('jade')

module.exports = function(data) {

	var list = []

	data.forEach(function(d, i){
		var element = {
			item:d
		}
		list.push(element)
	})

    var html = jade.renderFile(__dirname + '/templates/list.jade', {
        data: data
    })
    // console.log(html)

    return html
}
