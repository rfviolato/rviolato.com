/* Dependencies */
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

/* Config */
var config = require('./config');

/* Task */
gulp.task('vendors-min', vendorsMinTask);

function vendorsMinTask() {
	return gulp.src(config.paths.build + 'vendors.js')
		   .pipe(uglify())
		   .pipe(rename('vendors.min.js'))
		   .pipe(gulp.dest(config.paths.build));
}