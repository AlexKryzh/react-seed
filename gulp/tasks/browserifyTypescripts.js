import config             from '../config';
import gulp                from 'gulp';
import browserify      from 'browserify';
import source            from 'vinyl-source-stream';
import tsify                from 'tsify';

gulp.task('browserify:Typescripts', function () {
    return browserify({
        basedir: '.',
        debug: true,
        entries: config.scripts.src,
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest(config.scripts.dest));
});