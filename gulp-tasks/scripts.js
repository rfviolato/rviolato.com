/* Dependencies */
var gulp = require('gulp');

/* Config */
var config = require('./config');

var taskList = [
	'js-concat',
	'js-min'
];

/* Task */
gulp.task('scripts', taskList);