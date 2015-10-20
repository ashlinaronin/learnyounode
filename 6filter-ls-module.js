var fs = require('fs');
var path = require('path');


module.exports = function (directory, filter, callback) {
  // try to read the dir and send to teh callback
  fs.readdir(directory, readdir_callback);


  // callback gets two params, first will be error (could be null) and data
  function readdir_callback(err, list) {
    if (err) {
      return callback(err); // early return on error
    }

    var filteredList = [];

    list.forEach(function (file) {
      if (path.extname(file) == '.' + filter) {
        filteredList.push(file);
      }
    });

    callback(null, filteredList);
  }
}
