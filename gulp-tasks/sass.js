/* Dependencies */
var gulp = require('gulp');
var sass = require('gulp-sass');

/* Config */
var config = require('./config');

/* Task */
gulp.task('sass', sassTask);

function sassTask() {
	return gulp.src(config.paths.sass + 'main.scss')
			   .pipe(sass().on('error', sass.logError))
			   .pipe(gulp.dest(config.paths.css));
}