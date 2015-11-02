var fs = require('fs');
var path = require('path');

module.exports = function (directory, filter, callback) {
  // Try to read the dir and send to the callback
  fs.readdir(directory, readdir_callback);

  // This callback gets two params. The first will be error (could be null).
  // The second in this case is the list of files in the directory from fs.readdir
  function readdir_callback(err, list) {
    // Early error return pattern. If we get an error we send it back up through
    // the chain of callbacks. If there's no error, continue processing data.
    if (err) {
      return callback(err);
    }

    // Filter the file results by the given filter and add them to a new array
    var filteredList = [];
    list.forEach(function (file) {
      if (path.extname(file) === '.' + filter) {
        filteredList.push(file);
      }
    });

    // Processing went smoothly, call whichever callback was passed to this module
    // and send the filtered list to it
    callback(null, filteredList);
  }
}
