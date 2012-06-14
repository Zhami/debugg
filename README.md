Debugg
------
I like the features of debug and eyes, but they don't work together. It took a small bit of glue.


=======


Install
-----
    npm install debugg


Example
-----

    debugg("hello");
    debugg.inspect({bob:3},"label-1");
    debugg.inspect({sam:4},"label-2");
    debugg.write('Hello (via .write)');
    // NOTE:
    // be sure to set DEBUG= in command line invocation!

see the example.js for additional details and info


Contributors
-----

   * [Stuart Malin](https://github.com/zhami/doml/commits/master?author=zhami) [@Zhami](http://twitter.com/#!/zhami)
