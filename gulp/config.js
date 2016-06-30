export default {

    app:{
        name: 'React Seed'
    },

    browserPort: 3000,
    UIPort: 3001,

    sourceDir: './app/',
    buildDir: './build/',

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
        main: 'app/index.html'
    },

    init: function() {
        return this;
    }
    
}.init();
