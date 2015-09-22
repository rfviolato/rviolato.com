/* Dependencies */
var gulp = require('gulp');

var tasks = [
	'sass',
	'cssMin',
	'inject',
	'browser'
];

gulp.task('default', tasks);