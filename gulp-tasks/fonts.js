/* Dependencies */
var gulp = require('gulp');

/* Config */
var config = require('./config');

/* Task */
gulp.task('fonts', fontsTask);

function fontsTask() {
	return gulp.src(config.paths.src + 'fonts/*.*')
			   .pipe(gulp.dest(config.paths.dist + 'fonts/'));
}