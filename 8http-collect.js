/*
** Write a program that performs an HTTP GET request to a URL provided to you
** as the first command-line argument. Write the String contents of each "data"
** event from the response to a new line on the console (stdout).
*/
var http = require('http');
var urls = [process.argv[2], process.argv[3], process.argv[4]];
var pages = [];
var waiting = 0;

// Replace for loop with Array.map
// For every url, run the given getPage callback function on it.
// I'm trying to name all my callbacks so everything is clear
urls.map(function getPage(url, index) {

  http.get(url, function concatData(response) {
    waiting++;
    var collectedData = "";
    response.setEncoding("utf8");

    response.on("data", function(data) {
      collectedData += data;
    });

    response.on("error", function(error) {
      console.log(error);
      return;
    });

    response.on("end", function() {
      pages[index] = collectedData;
      waiting--;
      if (!waiting) printPages();
    });

  }); // end http get callback
}); // end urls map callback

/* Print each page by iterating through the associative array using
** Array.map().
*/
function printPages() {
  pages.map(function(page) {
    console.log(page);
  });
}
