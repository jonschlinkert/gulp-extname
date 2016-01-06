'use strict';

var through = require('through2');
var rewrite = require('rewrite-ext');

module.exports = function(ext) {
  if (ext && typeof ext === 'object') {
    ext = ext.ext ? ext.ext : null;
  }

  return through.obj(function(file, enc, next) {
    if (ext && file.extname) {
      file.extname = ext;
    } else {
      file.path = rewrite(file.path, ext);
    }
    next(null, file);
  });
};
