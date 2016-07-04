import config    from '../config';
import gulp       from 'gulp';

gulp.task('watch:Files', ['server'], function() {

    global.isWatching = true;

    gulp.watch([config.templates.main], ['copy:MainIndex']);
    gulp.watch([config.scripts.src], ['browserify:Scripts']);

});