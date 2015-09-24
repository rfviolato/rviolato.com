/* Dependencies */
var gulp = require('gulp');

/* Config */
var config = require('./config');

var taskList = [
	'vendors-concat',
	'vendors-min'
];

/* Task */
gulp.task('scripts', taskList);