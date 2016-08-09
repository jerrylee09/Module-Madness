var pickNumber = require('./app2.js');

var convertion = function() {
	var convert = pickNumber(100,10000);
	var convert2 = '$' + convert.toLocaleString();
	return convert2;
};



module.exports = convertion;