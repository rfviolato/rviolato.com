/* Dependencies */
var gulp = require('gulp');

var taskList = [
	'clean-build',
	'scripts',
	'vendors',
];

/* Task */
gulp.task('build', taskList);