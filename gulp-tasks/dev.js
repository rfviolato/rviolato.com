/* Dependencies */
var gulp = require('gulp');

gulp.task('dev', devApp);
gulp.task('dev:dist', devDist);

function devApp() {
	var tasks = [
		'sass',
		'js-concat',
		'vendors-concat',
		'inject'
	];
	
	gulp.start(tasks, 'browser');	
}

function devDist() {
	var tasks = [
		'build'
	];
	
	gulp.start(tasks, 'browser:dist');
}