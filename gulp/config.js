export default {

    app:{
        name: 'React Seed'
    },

    browserPort: 3005,
    UIPort: 3006,

    src: './src/',
    dest: './dist/',
    destFiles: './dist/**/*',

    assetExtensions: [
        'js',
        'json',
        'css',
        'png',
        'jpe?g',
        'gif',
        'svg',
        'eot',
        'otf',
        'ttc',
        'ttf',
        'woff',
        'woff2?'
    ],

    templates: {
        main: 'src/index.html'
    },

    scripts: {
        src: ['src/typescripts/app.ts'],
        srcs: ['src/scripts/**/*.js'],
        dest: 'dist/scripts'
    },

    init: function() {
        return this;
    }
    
}.init();
