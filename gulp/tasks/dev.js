import gulp                           from 'gulp';
import runSequence             from 'run-sequence';

gulp.task('dev', function(cb) {

    cb = cb || function() {};

    runSequence(
        [
            'clean:Build'
        ],
        [
            'browserify:Scripts'
        ],
        [
            'copy:MainIndex'
        ],
        [
            'watch:Files'
        ], 
        cb
    );

});