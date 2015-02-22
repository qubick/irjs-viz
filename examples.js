var domout = require('./lib/domout'),
    viz = require('./lib/viz')

var data = [5, 10, 15, 20, 25]

domout.html('<h1>Circles</h1>')

// note: use domout.svg for <svg> tags for them to be displayed properly
domout.svg(viz.circles(data))

domout.html('<h1>Barchart</h1>')
domout.svg(viz.barchart(data, {
    title: 'some title'
}))

domout.html('<h1>Line Graph</h1>')
domout.svg(viz.linegraph(data))

domout.html('<h1>List</h1>')
domout.html(viz.list(data))

domout.html('<h1>JSON</h1>')
var data = [
    ['John', 3, 5],
    ['Adam', 4, 8]
]

domout.html(viz.json(data))

domout.html('<h1>Table</h1>')
domout.html(viz.table(data))


var data = [
    [5, 5],
    [10, 10],
    [15, 15],
	 [15, 10]
]

domout.html('<h1>Scatter Plot</h1>')
domout.svg(viz.scatterplot(data))
