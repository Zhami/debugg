var 
	debug		= require('debug')
	, Emitter	= require('events').EventEmitter
	, eyes		= require('eyes')
	, Stream	= require('stream').Stream
	, util		= require('util')
	, debugg, Debugg, Proxy;

// eyes doesn't print the label when returning the string (stream=null)
// so we give it a stream

Proxy = function () {
	//Stream is an abstraction
	//Emitter.call(this);
	Stream.call(this);
	this.writable = true;
};
util.inherits(Proxy, Stream);	// Inherit from `EventEmitter`


Proxy.prototype.write = function (data) {
	this.emit('data', data);
	return true;
};


Debugg = (function () {
	var	C;

	C = function (name, options) {
		var	f, proxy;

		f = function (s) {
			f.debug(s);
		};

		proxy = new Proxy();
		proxy.on("data", function (data) {
			f.debug(data);
		});
		f.proxy = proxy;
		options = options || {};
		options.stream = proxy;
		f.options = options;
		f.debug = debug(name);
		f.inspector = eyes.inspector(options);
		f.__proto__ = C.prototype;

		return f;
	};

	C.prototype.inspect = function (o, label) {
		var self = this;
		this.inspector(o, label);		// writes to stream
	};

	// used just to test the write through the proxy
	C.prototype.write = function (s) {
		this.proxy.write(s);
	}
	
	return C;
})();

debugg = function (name) {
	return new Debugg(name);
};

debugg.Debugg = Debugg;

module.exports = debugg;
