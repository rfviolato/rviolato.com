/* Dependencies */
var gulp = require('gulp');
var sequence = require('run-sequence');

gulp.task('dev', devApp);
gulp.task('dev:dist', devDist);

function devApp() {
	var tasks = [
		'sass',
		'js-concat',
		'vendors-concat',
		'inject'
	];

	sequence(tasks, 'browser');
}

function devDist() {
	var tasks = [
		'build'
	];
	
	sequence(tasks, 'browser:dist');
}