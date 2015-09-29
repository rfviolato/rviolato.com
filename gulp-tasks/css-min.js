/* Dependencies */
var gulp = require('gulp');
var cssMin = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');

/* Config */
var config = require('./config');

/* Task */
gulp.task('css-min', ['sass'], cssMinTask);

function cssMinTask() {

	var autoprefixerOptions = {
        browsers: ['last 2 versions'],
        cascade: false
    };

	return gulp.src(config.paths.src + config.paths.css + config.files.src.css)
			   .pipe(sourcemaps.init())
			   .pipe(autoprefixer(autoprefixerOptions))
			   .pipe(cssMin())
			   .pipe(rename(config.files.dist.css))
			   .pipe(sourcemaps.write('.'))
			   .pipe(gulp.dest(config.paths.dist + config.paths.styles));
}