var fs = require('fs');

// Get filename from
var file = fs.readFileSync(process.argv[2]).toString();
var lines = file.split('\n');

// This will find one extra newline, so subtract 1
var numLines = lines.length - 1;

console.log(numLines);
