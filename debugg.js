var 
	debug		= require('debug')
	, Emitter	= require('events').EventEmitter
	, eyes		= require('eyes')
	, stream	= require('stream')
	, util		= require('util')
	, debugg, Debugg, Stream;

// eyes doesn't print the label when returning the string (stream=null)
// so we give it a stream

Stream = function () {
	//stream.Stream.call(this);
	Emitter.call(this);
	this.writable = true;
};
//
// Inherit from `stream.Stream`
//
//util.inherits(Stream, stream.Stream);
util.inherits(Stream, Emitter);


Stream.prototype.write = function (data) {
	this.emit('data', data);
};


Debugg = (function () {
	var	C;

	C = function (name, options) {
		var	f, myStream;
		f = function (s) {
			f.debug(s);
		};
		myStream = new Stream();
		f.stream = myStream;
		options = options || {};
		options.stream = myStream;
		f.options = options;
		f.debug = debug(name);
		f.inspector = eyes.inspector(options);
		f.__proto__ = C.prototype;

		return f;
	};

	C.prototype.inspect = function (o, label) {
		var self = this;

		this.stream.on("data", function (data) {
			self.debug(data);
		});

		this.stream.on("end", function () {
console.log("stream ended")
		});
		
		this.inspector(o, label);		// writes to stream

	}
	
	return C;
})();

debugg = function (name) {
	return new Debugg(name);
};

debugg.Debugg = Debugg;

module.exports = debugg;
