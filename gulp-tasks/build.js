/* Dependencies */
var gulp = require('gulp');

var taskList = [
	'clean-build',
	'clean-tmp',
	'js-min',
	'css-min',
	'fonts',
	'vendors-min',
	'inject:dist'
];

/* Task */
gulp.task('build', taskList);