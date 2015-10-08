/* Dependencies */
var gulp = require('gulp');
var watch = require('gulp-watch');
var browser = require('browser-sync');

/* Config */
var config = require('./config');

/* Task */
gulp.task('browser', browserDev);
gulp.task('browser:dist', browserDist);

function browserDist() {
    var browserConfig = {
        server: {
            baseDir: config.paths.dist,
        },
        port: 8000
    };

    return browser(browserConfig, function() {
    	console.log('\n###################################################');
    	console.log('##### Distribution Development Server Started #####');
    	console.log('###################################################');
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

    return browser(browserConfig, function() {
    	console.log('\n#########################################');
    	console.log('##### App Development ServerStarted #####');
    	console.log('#########################################');
    });
}