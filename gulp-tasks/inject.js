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
  				config.paths.scripts + '**/*.js',
  				config.paths.css + '**/*.css'
  			  ];
  var target = gulp.src(config.paths.src + 'index.html');
  var sources = gulp.src(files, {read: false, cwd: config.paths.src});
 
  return target
			.pipe(inject(gulp.src(bowerFiles(), {read: false, cwd: config.paths.src}), {name: 'bower'}))
			.pipe(inject(sources))
  	 		.pipe(gulp.dest(config.paths.src));
}