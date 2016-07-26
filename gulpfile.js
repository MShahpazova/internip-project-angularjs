// Include gulp
var gulp = require('gulp');
// Define base folders
var src = 'src/';
var dest = 'build/';
// Include plugins
var ts = require("gulp-typescript");
var sourcemaps = require('gulp-sourcemaps');
var server = require('gulp-server-livereload');
var connect = require('gulp-connect');

gulp.task('scripts', function () {
    return gulp.src('app/**/*.ts')
    .pipe(
        ts({
            "compilerOptions": {
                 "target": "es5",
                 "module": "commonjs",
                 "sourceMap": true
             }
        })
    )
    .pipe(gulp.dest(function(file) {
        return file.base;
    }));
});

gulp.task('watch', function() {
  // Watch .ts files
  gulp.watch('app/**/*.ts', ['scripts']);
});

gulp.task('watch', function() {
  // Watch .ts files
  gulp.watch('app/app.ts', ['scripts']);
});

gulp.task('webserver', function() {
  connect.server({
    livereload: true,
    port: 8447
  });
});

gulp.task('default', ['scripts', 'watch', 'webserver']);