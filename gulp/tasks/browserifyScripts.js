import config             from '../config';
import gulp                from 'gulp';
import clean              from 'gulp-clean';
import browserify      from 'gulp-browserify';

gulp.task('browserify:Scripts', function () {
    gulp.src(config.scripts.src_app)
      .pipe(browserify({
          debug: true,
          transform: [ 'reactify' ]
      }))
      .pipe(gulp.dest(config.scripts.build));
});