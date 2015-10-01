/* Dependencies */
var gulp = require('gulp');
var clean = require('gulp-clean');

/* Config */
var config = require('./config');

/* Task */
gulp.task('clean-tmp', cleanTmpTask);

function cleanTmpTask() {
	return gulp.src(config.paths.src + config.paths.temp)
		   .pipe(clean());
}