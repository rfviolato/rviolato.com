/* Dependencies */
var gulp = require('gulp');
var cssMin = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');

/* Config */
var config = require('./config');

/* Task */
gulp.task('cssMin', cssMinTask);

function cssMinTask() {
	return gulp.src(config.paths.css + 'main.css')
			   .pipe(sourcemaps.init())
			   .pipe(cssMin())
			   .pipe(sourcemaps.write('.'))
			   .pipe(gulp.dest(config.paths.css));
}