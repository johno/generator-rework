'use strict';

var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

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

      this.dest.mkdir(this.projectName);
      this.dest.mkdir(this.projectName + '/css');
      this.dest.mkdir(this.projectName + '/css/src');

      this.template('_README.md', this.projectName + '/README.md');
      this.template('_gulpfile.js', this.projectName + '/gulpfile.js');
      this.template('_package.json', this.projectName + '/package.json');
      this.template('_index.html', this.projectName + '/index.html');
      this.template('_all.css', this.projectName + '/css/src/all.css');

      this.src.copy('editorconfig', this.projectName + '/.editorconfig');
      this.src.copy('gitignore', this.projectName + '/.gitignore');

      done();
    }.bind(this));
  }
});

module.exports = PGenerator;
