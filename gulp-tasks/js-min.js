/* Dependencies */
var gulp = require('gulp');
var ngmin = require('gulp-ngmin');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

/* Config */
var config = require('./config');

/* Task */
gulp.task('js-min', ['js-concat'], jsMinTask);

function jsMinTask() {
	return gulp.src(config.paths.build + 'scripts.js')
		   	   .pipe(ngmin())
		   	   .pipe(uglify())
		   	   .pipe(rename('scripts.min.js'))
		   	   .pipe(gulp.dest(config.paths.build));
}