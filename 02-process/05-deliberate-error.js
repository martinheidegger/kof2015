require('net').createServer().listen()

setTimeout(function () {
	throw new Error("an error occured")
}, 1000)
