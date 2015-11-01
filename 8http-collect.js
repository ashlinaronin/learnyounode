/*
** Write a program that performs an HTTP GET request to a URL provided to you
** as the first command-line argument. Write the String contents of each "data"
** event from the response to a new line on the console (stdout).
*/
var http = require('http');
var urls = [process.argv[2], process.argv[3], process.argv[4]];
var urlData = [];


for (var i = 0; i < urls.length; i++) {
  http.get(urls[i], concatDataCallback(endCallback));
}

/*
** New callback function is called whenever we have new data.
** After adding new data, it checks to see whether we have all of it,
** and then prints everything to the console.
*/
function endCallback(newData) {
  urlData.push(newData);

  if (urlData.length === urls.length) {
    urlData.forEach(function(url) {
      console.log(url);
    });
  }
}


function concatDataCallback(response, endCallback) {
  // Response object is a Node Stream object
  // Set its encoding to utf8 so it outputs strings rather than node Buffers
  response.setEncoding("utf8");
  var collectedData = "";

  response.on("data", function(data) {
    collectedData += data;
  });

  response.on("error", function(error) {
    console.log(error);
  });

  response.on("end", function() {
    endCallback(collectedData);
  });
}
