import config             from '../config';
import gulp                from 'gulp';
import browserify      from 'browserify';
import source            from 'vinyl-source-stream';
import tsify                from 'tsify';

gulp.task('build:App', function () {
    return browserify({
        basedir: '.',
        debug: true,
        entries: config.scripts.src,
        cache: {},
        packageCache: {}
    })
    .plugin(tsify, {
        noImplicitAny: false,
        noEmitOnError: true,
        declarationFiles: true,
        noExternalResolve: false,
        removeComments: false,
        module: "commonjs",
        diagnostics: true,
        sourceMap: true,
        target: "ES5",
        jsx: "react"
    })
    .bundle()
    .on('error', function (error) { console.error(error.toString()); })
    .pipe(source('app.js'))
    .pipe(gulp.dest(config.scripts.dest));
});