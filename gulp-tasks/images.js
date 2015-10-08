/* Dependencies */
var gulp = require('gulp');

/* Config */
var config = require('./config');

/* Task */
gulp.task('images', imagesTask);

function imagesTask() {
	return gulp.src(config.paths.src + 'images/**/*')
			   .pipe(gulp.dest(config.paths.dist + 'images/'));
}