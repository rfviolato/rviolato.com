/* Dependencies */
var gulp = require('gulp');
var inject = require('gulp-inject');
var bowerFiles = require('main-bower-files');

/* Config */
var config = require('./config');

/* Task */
gulp.task('inject', injectTask);

function injectTask() {
  var files = [
    				config.paths.build + 'scripts.min.js',
    				config.paths.build + 'vendors.min.js',
            config.paths.build + 'main.min.css',
            config.paths.build + 'main.min.css.map',
  			  ];
  var target = gulp.src(config.paths.src + 'index.html');
  var sources = gulp.src(files, {read: false}, {relative: true});
 
  return target
  			 .pipe(inject(sources))
    	 	 .pipe(gulp.dest(config.paths.src));
}