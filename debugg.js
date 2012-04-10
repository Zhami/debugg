var 
	debug		= require('debug')
	, eyes		= require('eyes')
	, debugg, Debugg;

Debugg = (function () {
	var	C;

	C = function (name) {
		var	self;
		self = debug(name);
		return self;
	};

	C.prototype.inspect = function (o, s) {
	}
	
	return C;
})();

debugg = function (name) {
	return new Debugg(name);
};

debugg.Debugg = Debugg;

module.exports = debugg;
