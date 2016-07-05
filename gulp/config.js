export default {

    app:{
        name: 'React Seed'
    },

    browserPort: 3005,
    UIPort: 3006,

    sourceDir: './src/',
    buildDir: './dist/',

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
        src: ['src/scripts/**/*.js'],
        src_app: ['src/scripts/app.js'],
        build: './dist/scripts/'
    },

    init: function() {
        return this;
    }
    
}.init();
