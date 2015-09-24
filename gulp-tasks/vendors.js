/* Dependencies */
var gulp = require('gulp');

var taskList = [
	'vendors-concat',
	'vendors-min'
];

/* Task */
gulp.task('vendors', taskList);