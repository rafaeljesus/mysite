var gulp = require('gulp')
  , concat = require('gulp-concat')
  , uglify = require('gulp-uglify')
  , minifyCSS = require('gulp-minify-css');

var scripts = [
  'public/common-files/js/jquery-1.10.2.min.js'
  , 'public/javascripts/flat-ui/js/bootstrap.min.js'
  , 'public/common-files/js/modernizr.custom.js'
  , 'public/common-files/js/jquery.scrollTo-1.4.3.1-min.js'
  , 'public/common-files/js/jquery.parallax.min.js'
  , 'public/common-files/js/startup-kit.js'
  , 'public/javascripts/app.js'
];

gulp.task('scripts', function() {
  return gulp.src(scripts)
  .pipe(uglify())
  .pipe(concat('app.min.js'))
  .pipe(gulp.dest('public/build/js'));
});

var styles = [
  'public/stylesheets/flat-ui/bootstrap/css/bootstrap.css'
  , 'public/stylesheets/flat-ui/css/flat-ui.css'
  , 'public/common-files/css/icon-font.css'
  , 'public/stylesheets/css/style.css'
];

gulp.task('styles', function() {
  gulp.src(styles)
  .pipe(minifyCSS({ keepBreaks:true }))
  .pipe(concat('app.min.css'))
  .pipe(gulp.dest('public/build/css'))
});

gulp.task('default', ['scripts', 'styles']);
