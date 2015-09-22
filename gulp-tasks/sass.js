/* Dependencies */
var gulp = require('gulp');
var sass = require('gulp-sass');
var cssMin = require('gulp-minify-css');

/* Config */
var config = require('./config');

/* Task */
gulp.task('sass', sassTask);

function sassTask() {
	return gulp.src(config.paths.sassPath + 'main.scss')
			   .pipe(sass().on('error', sass.logError))
			   .pipe(gulp.dest(config.paths.cssPath));
}