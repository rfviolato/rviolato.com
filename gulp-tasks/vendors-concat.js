/* Dependencies */
var gulp = require('gulp');
var concat = require('gulp-concat');
var bowerFiles = require('main-bower-files');

/* Config */
var config = require('./config');

/* Task */
gulp.task('vendors-concat', vendorsTask);

function vendorsTask() {
	var dest = config.paths.src + config.paths.temp + config.paths.scripts;
	return gulp.src(bowerFiles())
		   .pipe(concat('vendors.js'))
		   .pipe(gulp.dest(dest));
}