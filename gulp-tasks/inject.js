/* Dependencies */
var gulp = require('gulp');
var gutil = require('gulp-util');
var inject = require('gulp-inject');
var bowerFiles = require('main-bower-files');

/* Config */
var config = require('./config');

/* Task */
gulp.task('inject', injectTask);

function injectTask() {
  gutil.env.dist ? injectDist() : injectSrc();
}

function injectDist() {
  var files = [
    config.paths.build + 'scripts.min.js',
    config.paths.build + 'vendors.min.js',
    config.paths.build + 'main.min.css',
    config.paths.build + 'main.min.css.map',
  ];
  var target = gulp.src(config.paths.dist + 'index.html');
  var sources = gulp.src(files, {read: false});
 
  return target
         .pipe(inject(sources))
         .pipe(gulp.dest(config.paths.dist));
}

function injectSrc() {
  
}