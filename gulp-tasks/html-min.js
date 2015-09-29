/* Dependencies */
var gulp = require('gulp');
var html = require('gulp-htmlmin');

/* Config */
var config = require('./config');

/* Task */
gulp.task('html-min', htmlMin);

function htmlMin() {
	return gulp.src(config.paths.src + 'index.html')
			   .pipe(html({collapseWhitespace: true}))
			   .pipe(gulp.dest(config.paths.dist));
}
