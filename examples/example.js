var render = require('../lib/viz')
	,domout = require('../lib/domout')

data = [
	['Jonh', 35],
	['Adam', 48]
]

domout.svg(render.table(data));
