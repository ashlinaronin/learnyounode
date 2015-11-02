/*
** Write a program that performs an HTTP GET request to a URL provided to you
** as the first command-line argument. Write the String contents of each "data"
** event from the response to a new line on the console (stdout).
*/
var http = require('http');

http.get(process.argv[2], callback);

function callback(response) {
  // Response object is a Node Stream object
  // Set its encoding to utf8 so it outputs strings rather than node Buffers
  response.setEncoding("utf8");

  response.on("data", function(data) {
    console.log(data);
  });

  response.on("error", function(error) {
    console.log(error);
  });

  // Apparently you can also do it like this.
  // Cool that you can pass the data directly to console.log.
  /* http.get(process.argv[2], function (response) {
       response.setEncoding('utf8')
       response.on('data', console.log)
       response.on('error', console.error)
     })
  */
}
