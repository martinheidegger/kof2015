process.on('uncaughtException', function (e) {
	console.log(e.stack)
})

require('net').createServer().listen()

setTimeout(function () {
	throw new Error("an error occured")
}, 1000)
