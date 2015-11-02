/*
** Write an HTTP server that receives only POST requests and
** converts incoming POST body characters to upper-case and
** returns it to the client.
** Your server should listen on the port provided by the first argument
** to your program.
*/
var http = require('http');
var map = require('through2-map');

var server = http.createServer(function serverCallback(request, response) {
  if (request.method == 'POST') {
    // First write the HTTP response headers
    response.writeHead(200, { 'content-type': 'text/plain' });
    // Then pipe all request chunks through our mapping function
    request.pipe(map(function(chunk) {
      return chunk.toString().toUpperCase();
    })).pipe(response);
  } else {
    return response.end("Send me a POST request please!\n");
  }

});

// Listen on port given as first CLI arg
server.listen(Number(process.argv[2]));
