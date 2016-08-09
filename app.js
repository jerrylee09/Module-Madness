var http = require('http');
var pickNumber = require('./app2.js');
var convertion = require('./app3.js');
var account = require('./app4.js');
	

http.createServer(function(req, res) {
	res.write(200);

	res.write(pickNumber(100,1000000));
	res.write(convertion());
	res.write(account());

}).listen(3000);

console.log(account());
console.log(convertion(100,1000000));
console.log(pickNumber(100,1000000));
console.log('listening on port 3000');