var gulp        = require('gulp');
var rename      = require('gulp-rename');
var cssmin      = require('gulp-minify-css');
var prefix      = require('gulp-autoprefixer');
var size        = require('gulp-size');
var header      = require('gulp-header');
var gutil       = require('gulp-util');
var rework      = require('gulp-rework');
var reworkNpm   = require('rework-npm');
var reworkVars  = require('rework-vars');
var reworkGrid  = require('rework-flex-grid');
var reworkMedia = require('rework-custom-media');
var reworkMatch = require('rework-matches');
var reworkColor = require('rework-color-function');

var banner = ['/*!',
              ' * <%= projectName %> - <%= description %>',
              ' * @author <%= name %>',
              ' */\n\n'].join('\n');

var gridOptions = {
  numColumns: 12,
  classNames: {
    grid: 'g',
    row: 'r',
    col: 'c'
  },
  mediaQueries: {
    sm: '32rem',
    md: '48rem',
    lg: '64rem'
  }
};

gulp.task('css', function() {
  return gulp.src('css/src/all.css')
    .pipe(
      rework(
        reworkNpm(),
        reworkVars(),
        reworkMedia(),
        reworkGrid(gridOptions),
        reworkMatch(),
        reworkColor))
          .pipe(size({ gzip: true, showFiles: true }))
          .pipe(prefix())
          .pipe(header(banner))
          .pipe(gulp.dest('css'))
          .pipe(cssmin())
          .pipe(size({ gzip: true, showFiles: true }))
          .pipe(rename({ suffix: '.min' }))
          .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
  gulp.watch('css/*.css', ['css']);
});

gulp.task('default', ['css', 'watch']);
