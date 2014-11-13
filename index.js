'use strict';

var through = require('through2');
var rewrite = require('rewrite-ext');

module.exports = function(ext) {
  return through.obj(function (file, enc, cb) {
    file.path = rewrite(file.path, ext);
    this.push(file);
    cb();
  });
};
