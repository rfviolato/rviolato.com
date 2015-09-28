/* Dependencies */
var gulp = require('gulp');
var concat = require('gulp-concat');
var bowerFiles = require('main-bower-files');

/* Config */
var config = require('./config');

/* Task */
gulp.task('vendors-concat', vendorsTask);

function vendorsTask() {
	return gulp.src(bowerFiles())
		   .pipe(concat('vendors.js'))
		   .pipe(gulp.dest(config.paths.dist + 'build/'));
}