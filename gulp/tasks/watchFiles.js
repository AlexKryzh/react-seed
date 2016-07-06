import config               from '../config';
import gulp                  from 'gulp';

gulp.task('watch:Files', ['server'], function() {

    global.isWatching = true;

    gulp.watch([config.templates.main], ['copy:MainIndex']);
    gulp.watch([config.scripts.srcs], ['browserify:Scripts']);

    gulp.watch(config.distFiles).on('change', global.browserSync.reload);

});