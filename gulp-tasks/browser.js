/* Dependencies */
var gulp = require('gulp');
var gutil = require('gulp-util');
var watch = require('gulp-watch');
var browser = require('browser-sync');

/* Config */
var config = require('./config');

/* Task */
gulp.task('browser', browserTask);

function browserTask() {
	(gutil.env.dist) ? browserDist() : browserDev();
}

function browserDist() {
    var browserConfig = {
        server: {
            baseDir: config.paths.dist,
        },
        port: 8000
    };

    browser(browserConfig, function() {
    	console.log('##### Distribution Development Started #####');
    });
}

function browserDev() {
    var browserConfig = {
        server: {
            baseDir: config.paths.src,
        },
        port: 9000
    };
    var cssFiles = config.paths.src + config.paths.sass + '**/*.scss';
    var scriptFiles = config.paths.src + config.paths.scripts + '**/*.js';

    //watch styles
    watch(cssFiles, function() {
    	gulp.start(['sass'], browser.reload);
    });

    //watch scripts
    watch(scriptFiles, function() {
    	gulp.start(['js-concat'], browser.reload);
    });

    browser(browserConfig, function() {
    	console.log('##### Local Development Started #####');
    });
}