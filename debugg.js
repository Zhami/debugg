var 
	debug		= require('debug')
	, eyes		= require('eyes')
	Debugg;

Debugg = (function () {
	var	Constructor;

	Constructor = function (name) {
		this = debug(name);
	};

	Constructor.prototype.inspect = function (o, s) {
	}
	
	return Constructor;
})();


exports = function (name) {
	return new Debugg(name);
};

exports.Debugg = Debugg;