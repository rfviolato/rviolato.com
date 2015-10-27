/* Dependencies */
var gulp = require('gulp');
var sequence = require('run-sequence');

var taskList = [
	'images',
	'js-concat',
	'js-min',
	'vendors-concat',
	'vendors-min',
	'css-min',
	'fonts',
	'html'
];

/* Task */
gulp.task('build', ['clean-build', 'clean-tmp'], function() {
	sequence(taskList, 'inject:dist');
});