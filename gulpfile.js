var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var server = require('browser-sync').create();

gulp.task('sass', function () {
  return gulp.src('sass/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))

    .pipe(gulp.dest('css'))
    .pipe(server.stream()); 
});

gulp.task('serve', ['sass'], function () {
  server.init({
    server: './',
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch('./sass/**/*{scss,sass}', ['sass']);
  gulp.watch('./*.html')
    .on('change', server.reload);
    
});