/* Dependencies */
var gulp = require('gulp');
var sequence = require('run-sequence');

var taskList = [
	'js-min',
	'vendors-min',
	'css-min',
	'fonts',
	'images',
	'html'
];

/* Task */
gulp.task('build', function(done) {
	var cleanUp = ['clean-build', 'clean-tmp'];
	var inject = 'inject:dist';
	
	return sequence(cleanUp, taskList, inject, done);
});