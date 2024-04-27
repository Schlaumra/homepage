import gulp from "gulp";
import cleancss from 'gulp-clean-css';
import csscomb from 'gulp-csscomb';
import rename from 'gulp-rename';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import gulpSass from 'gulp-sass';
import sass from 'sass';

const scss = gulpSass(sass);
// configure the paths
var watch_dir = './scss/**/*.scss';
var src_dir = './scss/*.scss';
var dest_dir = './css-compiled';

var paths = {
    source: src_dir
};

export function watch() {
  return gulp.watch(watch_dir, build);
}

export function build() {
  return gulp.src(paths.source)
      .pipe(sourcemaps.init())
      .pipe(scss({
            outputStyle: 'compressed',
            precision: 10
          }).on('error', scss.logError)
      )
      .pipe(sourcemaps.write())
      .pipe(autoprefixer())
      .pipe(gulp.dest(dest_dir))
      .pipe(csscomb())
      .pipe(cleancss())
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(gulp.dest(dest_dir));
}
