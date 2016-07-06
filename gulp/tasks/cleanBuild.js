import config      from '../config';
import gulp         from 'gulp';
import clean       from 'gulp-clean';

gulp.task('clean:Build', function() {
    return gulp.src( config.dest, {read: false})
        .pipe(clean());
});