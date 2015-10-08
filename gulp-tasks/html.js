/* Dependencies */
var gulp = require('gulp');
var html = require('gulp-htmlmin');

/* Config */
var config = require('./config');

/* Task */
gulp.task('html', htmlTask);

function htmlTask() {
	return gulp.src(config.paths.src + 'views/**/*.html')
			   .pipe(html({collapseWhitespace: true}))
			   .pipe(gulp.dest(config.paths.dist + 'views/'));
}