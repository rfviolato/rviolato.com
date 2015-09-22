var gulp = require('gulp');
var browser = require('browser-sync');
var config = require('./config');

gulp.task('browser', function() {
    browser({
        server: {
            baseDir: config.basePaths.dist,
        },
        port: 3000
    });
});