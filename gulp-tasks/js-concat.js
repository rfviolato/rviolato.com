/* Dependencies */
var gulp = require('gulp');
var concat = require('gulp-concat');

/* Config */
var config = require('./config');

/* Task */
gulp.task('js-concat', jsConcatTask);

function jsConcatTask() {
	return gulp.src(config.paths.src + 'scripts/**/*.js')
		   .pipe(concat('scripts.js'))
		   .pipe(gulp.dest(config.paths.dist + 'build/'));
}