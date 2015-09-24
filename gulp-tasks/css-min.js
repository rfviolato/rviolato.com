/* Dependencies */
var gulp = require('gulp');
var cssMin = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

/* Config */
var config = require('./config');

/* Task */
gulp.task('cssMin', cssMinTask);

function cssMinTask() {

	var autoprefixerOptions = {
        browsers: ['last 2 versions'],
        cascade: false			   	
    };

	return gulp.src(config.paths.src + config.paths.css + 'main.css')
			   .pipe(sourcemaps.init())
			   .pipe(autoprefixer(autoprefixerOptions))
			   .pipe(cssMin())
			   .pipe(sourcemaps.write('.'))
			   .pipe(gulp.dest(config.paths.src + config.paths.css));
}