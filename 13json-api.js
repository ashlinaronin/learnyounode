var http = require('http');
var url = require('url');

function parseTime(time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixTime(time) {
  return { unixtime: time.getTime() };
}

var server = http.createServer(function serverCallback(request, response) {
  var parsedUrl = url.parse(request.url, true);
  var jsDate = new Date(parsedUrl.query.iso);
  var output;

  if (parsedUrl.pathname == '/api/parsetime') {
    output = parseTime(jsDate);
  } else if (parsedUrl.pathname == '/api/unixtime') {
    output = unixTime(jsDate);
  }

  if (output) {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify(output));
    response.end();
  } else {
    response.writeHead(404);
    response.end();
  }
});

// Listen on port given as first CLI arg
server.listen(Number(process.argv[2]));
