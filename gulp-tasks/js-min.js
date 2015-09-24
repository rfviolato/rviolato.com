/* Dependencies */
var gulp = require('gulp');

/* Config */
var config = require('./config');

/* Task */
gulp.task('js-min', jsMinTask);

function jsMinTask() {
	return gulp.src(config.paths.src + 'scripts.js');
}