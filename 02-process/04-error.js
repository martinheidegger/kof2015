require('net').createServer().listen()

setTimeout(function () {
	var obj = {}
	obj.method()
}, 1000)
