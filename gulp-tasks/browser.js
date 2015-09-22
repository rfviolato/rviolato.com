/* Dependencies */
var gulp = require('gulp');
var gutil = require('gulp-util');
var browser = require('browser-sync');

/* Config */
var config = require('./config');

gulp.task('browser', function() {
	var browserConfig;
	if(gutil.env.dist){
	    browserConfig = {
	        server: {
	            baseDir: config.paths.dist,
	        },
	        port: 8000
	    };
	}else{
	    browserConfig = {
	        server: {
	            baseDir: config.paths.src,
	        },
	        port: 9000
	    };
	}

	browser(browserConfig);
});