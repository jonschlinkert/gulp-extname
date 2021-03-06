/*!
 * gulp-extname <https://github.com/jonschlinkert/gulp-extname>
 *
 * Copyright (c) 2014-2015 Jon Schlinkert
 * Licensed under the MIT license
 */

'use strict';

var path = require('path');
var File = require('vinyl');
var should = require('should');
var extname = require('./');

describe('extname', function () {
  describe('map extensions:', function () {
    it('should rewrite .coffee to .js extensions.', function (done) {
      var stream = extname();
      var expected = new File({path: 'abc.coffee', contents: null});

      stream.once('data', function (file) {
        file.path.should.equal('abc.js');
        done();
      });
      stream.write(expected);
      stream.end();
    });

    it('should rewrite .less to .css extensions.', function (done) {
      var stream = extname();
      var expected = new File({path: 'abc.less', contents: null});

      stream.once('data', function (file) {
        file.path.should.equal('abc.css');
        done();
      });
      stream.write(expected);
      stream.end();
    });

    it('should rewrite .styl to .css extensions.', function (done) {
      var stream = extname();
      var expected = new File({path: 'abc.styl', contents: null});

      stream.once('data', function (file) {
        file.path.should.equal('abc.css');
        done();
      });
      stream.write(expected);
      stream.end();
    });

    it('should rewrite .sass to .css extensions.', function (done) {
      var stream = extname();
      var expected = new File({path: 'abc.sass', contents: null});

      stream.once('data', function (file) {
        file.path.should.equal('abc.css');
        done();
      });
      stream.write(expected);
      stream.end();
    });

    it('should rewrite .scss to .css extensions.', function (done) {
      var stream = extname();
      var expected = new File({path: 'abc.scss', contents: null});

      stream.once('data', function (file) {
        file.path.should.equal('abc.css');
        done();
      });
      stream.write(expected);
      stream.end();
    });

    it('should rewrite .swig to .css extensions.', function (done) {
      var stream = extname();
      var expected = new File({path: 'abc.swig', contents: null});

      stream.once('data', function (file) {
        file.path.should.equal('abc.html');
        done();
      });
      stream.write(expected);
      stream.end();
    });

    it('should rewrite .hbs to .css extensions.', function (done) {
      var stream = extname();
      var expected = new File({path: 'abc.hbs', contents: null});

      stream.once('data', function (file) {
        file.path.should.equal('abc.html');
        done();
      });
      stream.write(expected);
      stream.end();
    });

    it('should rewrite .md to .css extensions.', function (done) {
      var stream = extname();
      var expected = new File({path: 'abc.md', contents: null});

      stream.once('data', function (file) {
        file.path.should.equal('abc.html');
        done();
      });
      stream.write(expected);
      stream.end();
    });

    it('should rewrite .tmpl to .css extensions.', function (done) {
      var stream = extname();
      var expected = new File({path: 'abc.tmpl', contents: null});

      stream.once('data', function (file) {
        file.path.should.equal('abc.html');
        done();
      });
      stream.write(expected);
      stream.end();
    });
  });

  describe('explicitly defined:', function () {
    it('should use the extension defined by the user as a string.', function (done) {
      var stream = extname('.foo');
      var expected = new File({path: 'faux.js', contents: null});

      stream.once('data', function (file) {
        file.path.should.equal('faux.foo');
        done();
      });
      stream.write(expected);
      stream.end();
    });

    it('should use the extension defined by the user as an object.', function (done) {
      var stream = extname({ext: '.foo'});
      var expected = new File({path: 'faux.js', contents: null});

      stream.once('data', function (file) {
        file.path.should.equal('faux.foo');
        done();
      });

      stream.write(expected);
      stream.end();
    });

    it('should use the default mapped extension when no `ext` is on the object.', function (done) {
      var stream = extname({blah: '.foo'});
      var expected = new File({path: 'faux.coffee', contents: null});

      stream.once('data', function (file) {
        file.path.should.equal('faux.js');
        done();
      });

      stream.write(expected);
      stream.end();
    });
  });

  describe('pass through', function () {
    it('should pass through .js extensions.', function (done) {
      var stream = extname();
      var expected = new File({path: 'faux.js', contents: null});

      stream.once('data', function (file) {
        file.path.should.equal('faux.js');
        done();
      });
      stream.write(expected);
      stream.end();
    });

    it('should pass through .css extensions.', function (done) {
      var stream = extname();
      var expected = new File({path: 'faux.css', contents: null});

      stream.once('data', function (file) {
        file.path.should.equal('faux.css');
        done();
      });
      stream.write(expected);
      stream.end();
    });

    it('should pass through .html extensions.', function (done) {
      var stream = extname();
      var expected = new File({path: 'faux.html', contents: null});

      stream.once('data', function (file) {
        file.path.should.equal('faux.html');
        done();
      });
      stream.write(expected);
      stream.end();
    });
  });
});
