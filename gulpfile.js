//Importing Gulp package.
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    less = require('gulp-less'),
//Spots errors within files - needs to be included in all functions before package is triggered.
    plumber = require('gulp-plumber');



// List of functions to run when command gulp is given!
//Watch auto runs when gulp is initialised
gulp.task('default', ['watch']);

//Scripts Task
//Uglifies
//Task e.g. minfiy, compile
gulp.task('scripts', function(){

  gulp.src('js/*.js') // Gets js files from destination
    .pipe(plumber()) // Plumber - Spots Errors
    .pipe(uglify()) // Package
    .pipe(gulp.dest('js/minjs')); //Creates destination of compiled js

});

gulp.task('less', function(){

  gulp.src('*.less') // Gets js files from destination
    .pipe(plumber()) // Plumber - Spots Errors
    .pipe(less()) // Package
    .pipe(gulp.dest('css/')); //Creates destination of compiled js

});

//Remember - Image Compressor takes files from ignored img folder and transferred into buuld folder.

//Watch Task
gulp.task('watch', function(){

  gulp.watch('js/*.js', ['scripts']);
  gulp.watch('*.less', ['less']);

});
