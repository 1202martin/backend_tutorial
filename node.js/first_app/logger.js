var url = 'http://mylogger.io/log';     //this url is made up, of course

function log(message){
    // Send an HTTP request
    console.log(message);
}

// module.exports.log = log;               //allowing the "log" function in this module to be accessible from outside this module via the .exports attribute.

//Could be inefficient trying to export a single function in a whole object.
//What can be done instead is rather to export the function itself directly like as follows

module.exports = log;

console.log(module);