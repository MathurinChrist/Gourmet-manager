const Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .addEntry('app', './assets/js/app.js')
    .enableSassLoader()
    .enablePostCssLoader()
    .configureBabel((config) => {
        // Configuration minimale de Babel
        config.presets = [
            ['@babel/preset-env', {
                useBuiltIns: 'usage',
                corejs: 3,
                targets: "> 0.25%, not dead"
            }]
        ];
    })
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .autoProvidejQuery();

module.exports = Encore.getWebpackConfig();