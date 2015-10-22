/* Dependencies */
var gulp = require('gulp');
var html = require('gulp-htmlmin');
var inject = require('gulp-inject');
var bowerFiles = require('main-bower-files');

/* Config */
var config = require('./config');

/* Task */
gulp.task('inject', injectSrc);
gulp.task('inject:dist', injectDist);

function injectDist() {
  var files = [
    config.paths.scripts + 'vendors.min.js',
    config.paths.scripts + 'scripts.min.js',
    config.paths.styles + 'css/main.min.css',
    config.paths.styles + 'css/main.min.css.map',
  ];
  var sources = gulp.src(files, {read: false, cwd: config.paths.dist});
 
  return gulp.src(config.paths.src + 'index.html')
             .pipe(inject(sources, {addRootSlash: false}))
             .pipe(html({collapseWhitespace: true}))
             .pipe(gulp.dest(config.paths.dist));
}

function injectSrc() {
  var files = [
    config.paths.temp + config.paths.scripts + 'vendors.js',
    config.paths.temp + config.paths.scripts + 'scripts.js',
    config.paths.temp + config.paths.styles + 'main.css',
    config.paths.temp + config.paths.styles + 'main.css.map',
  ];
  var sources = gulp.src(files, {read: false, cwd: config.paths.src});
 
  return gulp.src(config.paths.src + 'index.html')
             .pipe(inject(sources))
             .pipe(gulp.dest(config.paths.src));
}