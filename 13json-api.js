var http = require('http');
var url = require('url');

var server = http.createServer(function serverCallback(request, response) {
  var parsedUrl = url.parse(request.url, true);
  var output = {};
  var jsDate = new Date(parsedUrl.query.iso);
  //
  // console.dir(parsedUrl);

  if (parsedUrl.pathname == '/api/parsetime') {
    output.hour = jsDate.getHours();
    output.minute = jsDate.getMinutes();
    output.second = jsDate.getSeconds();
  } else if (parsedUrl.pathname == '/api/unixtime') {
    output.unixtime = jsDate.getTime();
  }

  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(JSON.stringify(output));
  response.end();

});

// Listen on port given as first CLI arg
server.listen(Number(process.argv[2]));
