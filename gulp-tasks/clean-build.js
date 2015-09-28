/* Dependencies */
var gulp = require('gulp');
var clean = require('gulp-clean');

/* Config */
var config = require('./config');

/* Task */
gulp.task('clean-build', cleanBuildTask);

function cleanBuildTask() {
	return gulp.src(config.paths.dist + 'build/')
		   .pipe(clean());
}