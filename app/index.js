'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var camelize = require('camelize');

var PGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    this.log(yosay(
      'A minimal yeoman generator for a web project using gulp, rework, and autoprefixer.'
    ));

    var prompts = [{
      name: 'name',
      message: 'Please enter your name:'
    }, {
      name: 'github',
      message: 'Please enter your github username:'
    }, {
      name: 'twitterHandle',
      message: 'Please enter your twitter username:'
    }, {
      name: 'projectName',
      message: 'Please enter the project name:'
    }, {
      name: 'description',
      message: 'Please enter a project description:'
    }];

    this.prompt(prompts, function (props) {
      this.name = props.name;
      this.github = props.github;
      this.projectName = props.projectName || 'rework-project';
      this.twitterHandle = props.twitterHandle;
      this.description = props.description;

      this.dest.mkdir(this.packageName)

      this.template('_README.md', this.packageName + '/README.md');
      this.template('_gulpfile.js', this.packageName + '/gulpfile.js');
      this.template('_package.json', this.packageName + '/package.json');
      this.template('_index.html', this.packageName + '/index.html');

      this.src.copy('editorconfig', this.packageName + '/.editorconfig');
      this.src.copy('gitignore', this.packageName + '/.gitignore');

      done();
    }.bind(this));
  }
});

module.exports = PGenerator;
