/* Dependencies */
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

/* Config */
var config = require('./config');

/* Task */
gulp.task('vendors-min', ['vendors-concat'], vendorsMinTask);

function vendorsMinTask() {
	var dest = config.paths.src + config.paths.temp + config.paths.scripts;
	return gulp.src(config.paths.temp + config.paths.scripts + 'vendors.js')
		   .pipe(uglify())
		   .pipe(rename('vendors.min.js'))
		   .pipe(gulp.dest(dest));
}