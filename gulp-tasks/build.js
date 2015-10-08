/* Dependencies */
var gulp = require('gulp');

var taskList = [
	'clean-build',
	'clean-tmp',
	'js-min',
	'vendors-min',
	'css-min',
	'fonts',
	'images',
	'html',
	'inject:dist'
];

/* Task */
gulp.task('build', taskList);