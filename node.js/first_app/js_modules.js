// var logger = require('./logger.js') // or use './logger'; key is that importing other JS files in Node // JS code requires the "require" function.

// setting logger to a "var" can cause potential errors, as the "var" indicates that the values of logger can change over the compile-time of this module.
// so a better declaration would be as follows

const logger = require('./logger.js');

console.log(logger);

logger.log('message');