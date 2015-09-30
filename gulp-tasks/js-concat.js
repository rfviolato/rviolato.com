/* Dependencies */
var gulp = require('gulp');
var concat = require('gulp-concat');

/* Config */
var config = require('./config');

/* Task */
gulp.task('js-concat', jsConcatTask);

function jsConcatTask() {
	var dest = config.paths.src + config.paths.temp + config.paths.scripts;
	return gulp.src(config.paths.src + config.paths.scripts + '/**/*.js')
		   .pipe(concat('scripts.js'))
		   .pipe(gulp.dest(dest));
}