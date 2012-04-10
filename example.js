var	debugg = require("./debugg")("example");

debugg("hello");
debugg.inspect({bob:3},"label");

// NOTE:
// be sure to set DEBUG= in command line invocation!