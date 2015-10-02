/* Dependencies */
var gulp = require('gulp');

var taskList = [
	'clean-build',
	'clean-tmp',
	'js-min',
	'css-min',
	'vendors-min',
	'inject'
];

/* Task */
gulp.task('build', taskList);