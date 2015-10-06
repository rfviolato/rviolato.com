/* Dependencies */
var gulp = require('gulp');
var gutil = require('gulp-util');


gulp.task('dev', devTask);

function devTask() {
	gutil.env.dist ? devDist() : devApp();
}

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
	
	gulp.start(tasks, 'browser');
}