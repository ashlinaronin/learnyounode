var filterls = require('./6filter-ls-module.js');

// Can't directly assign return value because we are using asynchronous i/o
// var filteredList = filterls(process.argv);
var directory = process.argv[2];
var filter = process.argv[3];

filterls(directory, filter, callback);

// Is this proper setup for callback?
function callback(err, data) {
  if (err) {
    console.log(err)
  } else {

    data.forEach(function(item) {
      console.log(item);
    });
  }
}
