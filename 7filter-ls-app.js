var filterls = require('./6filter-ls-module.js');

// Get directory and filter params from CLI args
var directory = process.argv[2];
var filter = process.argv[3];

// Call the module to actually do the filtering on the given directory with
// the given filter.
filterls(directory, filter, callback);

// Define what happens when data or and error is received from the module.
// In this case, just log either to the console.
function callback(err, list) {
  // Follow same early return on error pattern as in module
  if (err) {
    return console.log("There was an error: ", err);
  }

  // No error, continue to print out the result
  list.forEach(function(filename) {
    console.log(filename);
  });
}
