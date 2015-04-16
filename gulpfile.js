var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var less = require('gulp-less');
var liveReload = require('browser-sync');

gulp.task('scripts', function(){
    return gulp.src('app/scripts/*.js')
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/dist'));
});


gulp.task('css', function(){
    return gulp.src('app/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('app/dist'));
});


gulp.task('reload-when-done', ['scripts', 'css'], function(){
    liveReload.reload();
});

gulp.task('watch', function(){
    liveReload({
       server: {
           baseDir:'app/'
       }
    });
    gulp.watch('app/scripts/*.js', ['reload-when-done']);
    gulp.watch('app/less/*.less', ['reload-when-done']);
});

gulp.task('default', ['scripts', 'css', 'watch'], function(){});