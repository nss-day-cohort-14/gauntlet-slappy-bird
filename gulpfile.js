"use strict";

//use npm install --save to install all of these dependencies first
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var watch = require('gulp-watch');
var watchify = require('watchify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var assign = require('lodash.assign');
// var sass = require('gulp-sass');

var handleError = function(task) {
  return function(err) {

    notify.onError({
      message: task + ' failed, check the logs..',
      sound: false
    })(err);

    gutil.log(gutil.colors.bgRed(task + ' error:'), gutil.colors.red(err));
  };
};

var customOpts = {
  entries: ['./src/app.js'],
  debug: true //creates readable 'source maps' of code
};
var opts = assign({}, watchify.args, customOpts);
var bundler = watchify(browserify(opts));
bundler.on('update', bundle); // on any dep update, runs the bundler
bundler.on('log', gutil.log); // output build logs to terminal

function bundle() {
  return bundler.bundle()
    // log errors if they happen
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    // optional, remove if you don't need to buffer file contents
    .pipe(buffer())
    // optional, remove if you dont want sourcemaps
    .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
       // Add transformation tasks to the pipeline here.
    .pipe(sourcemaps.write('./')) // writes .map file
    .pipe(gulp.dest('./dist'));
}
gulp.task('browserify', bundle);

/*
  JSHINT SECTION

  Not optional. You should always be validating your JavaScript
 */
gulp.task('lint', function() {
  return gulp.src(['./src/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .on('error', function() { });
});

/*
  WATCH TASK SECTION

  Detects when you make a change to any JavaScript file, and/or
  SASS file and immediately runs the corresponding task.
 */
gulp.task('watch', function() {
  // Run the link task when any JavaScript file changes
  gulp.watch(['./src/**/*.js'], ['lint']);
  gutil.log(gutil.colors.bgGreen('Watching for changes...'));
});

// This task runs when you type `gulp` in the CLI
gulp.task('default', ['lint', 'watch'], bundle);
