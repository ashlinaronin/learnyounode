var fs = require('fs');

// Get filename from command line args
// Supply encoding as second arg to get data as string instead of Buffer
var file = fs.readFile(process.argv[2], 'utf8', function callback(err, data) {
  if (err) throw err;

  var numLines = data.split('\n').length - 1;
  console.log(numLines);
});
