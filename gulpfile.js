// Gulp.js configuration
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

//Builds SCSS into CSS
gulp.task('sass', function() {
    return gulp.src('./sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/css/'))
        .pipe(browserSync.stream());
});

//Uglifies JS
gulp.task('buildJS', function() {
    return gulp.src('./js/main.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest("src/js"))
        .pipe(uglify('app.js'))
        .pipe(browserSync.stream());
});

//Watches for changes in all files
gulp.task('serve', ['sass', 'buildJS'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./sass/main.scss", ['sass']);
    gulp.watch("./js/main.js", ['buildJS']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});


gulp.task('default', ['serve']);
