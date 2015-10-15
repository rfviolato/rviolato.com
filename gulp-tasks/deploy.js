/* Dependencies */
var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

/* Config */
var config = require('./config');

/* Task */
gulp.task('deploy', ['build'], deployTask);

function deployTask() {
	return gulp.src(config.paths.dist + '**/*')
			   .pipe(ghPages());
}