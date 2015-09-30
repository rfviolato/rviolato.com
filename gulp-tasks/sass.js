/* Dependencies */
var gulp = require('gulp');
var sass = require('gulp-sass');

/* Config */
var config = require('./config');

/* Task */
gulp.task('sass', sassTask);

function sassTask() {
	var dest = config.paths.src + config.paths.temp + config.paths.styles;
	var src = config.paths.src + config.paths.sass;
	return gulp.src(src + 'main.scss')
			   .pipe(sass().on('error', sass.logError))
			   .pipe(gulp.dest(dest));
}