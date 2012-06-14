var	debugg = require("./debugg")("example");

debugg("hello");
debugg.inspect({bob:3},"label-1");
debugg.inspect({sam:4},"label-2");
debugg.write('Hello (via .write)');
// NOTE:
// be sure to set DEBUG= in command line invocation!
// For this example:  DEBUG=example