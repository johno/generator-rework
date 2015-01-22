'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('rework:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withOptions({ 'skip-install': true })
      .withPrompt({})
      .on('end', done);
  });

  it('creates the correct files', function () {

    assert.file([
      'rework-project/gulpfile.js',
      'rework-project/index.html',
      'rework-project/css/src/all.css',
      'rework-project/README.md',
      'rework-project/.gitignore',
      'rework-project/package.json',
      'rework-project/.editorconfig'
    ]);
  });
});
