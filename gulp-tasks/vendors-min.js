/* Dependencies */
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

/* Config */
var config = require('./config');

/* Task */
gulp.task('vendors-min', ['vendors-concat'], vendorsMinTask);

function vendorsMinTask() {
	var dest = config.paths.dist + config.paths.scripts;
	var src = config.paths.src
			  + config.paths.temp
			  + config.paths.scripts
			  + config.files.src.vendors;

	return gulp.src(src)
		   .pipe(uglify())
		   .pipe(rename('vendors.min.js'))
		   .pipe(gulp.dest(dest));
}