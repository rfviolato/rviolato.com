/* Dependencies */
var gulp = require('gulp');
var sass = require('gulp-sass');
var cssMin = require('gulp-minify-css');

/* Config */
var config = require('./config');

/* Task */
gulp.task('sass', sassTask);

var sassPath = config.paths.src + 'styles/sass/main.scss';
var cssPath = config.paths.src + 'styles/css/';

function sassTask() {
	return gulp.src(sassPath)
			   .pipe(sass().on('error', sass.logError))
			   .pipe(gulp.dest(cssPath));
}