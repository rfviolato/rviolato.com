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
	var dest = config.paths.dist + config.paths.scripts;
	var src = config.paths.src + config.paths.temp + config.paths.scripts;
	return gulp.src(src + 'scripts.js')
		   	   .pipe(ngmin())
		   	   .pipe(uglify())
		   	   .pipe(rename(config.files.dist.scripts))
		   	   .pipe(gulp.dest(dest));
}