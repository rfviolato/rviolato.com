/* Dependencies */
var gulp = require('gulp');
var inject = require('gulp-inject');

/* Config */
var config = require('./config');

/* Task */
gulp.task('inject', injectTask);

function injectTask() {
  var files = [config.paths.src + 'scripts/**/*.js', config.paths.src + 'styles/css/**/*.css'];
  var target = gulp.src(config.paths.src + 'index.html');
  var sources = gulp.src(files, {read: false});
 
  return target.pipe(inject(sources))
    	 	   .pipe(gulp.dest(config.paths.src));
}