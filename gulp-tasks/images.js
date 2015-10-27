/* Dependencies */
var gulp = require('gulp');
var imageop = require('gulp-image-optimization');

/* Config */
var config = require('./config');

/* Task */
gulp.task('images', imagesTask);

function imagesTask() {
	var src = config.paths.src + config.paths.images + '**/*';
	var dest = config.paths.dist + config.paths.images;

	return gulp.src(src)
			   // .pipe(imageop({
			   //      optimizationLevel: 5,
			   //      progressive: true,
			   //      interlaced: true
			   //  }))
			   .pipe(gulp.dest(dest));
}