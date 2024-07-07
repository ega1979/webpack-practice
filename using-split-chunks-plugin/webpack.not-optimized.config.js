const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: {
        app1: './src/js/app.js',
        app2: './src/js/app2.js',
        app3: './src/js/app3.js',
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/[name].bundle.js',
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                extractComments: false,
            }),
        ],
    },
}