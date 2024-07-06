const path = require('path')

module.exports = {
    watch: true,
    mode: 'development',
    entry: './app.js',
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'bundle.js'
    },
}