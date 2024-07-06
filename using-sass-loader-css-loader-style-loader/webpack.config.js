const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                include: path.resolve(__dirname, 'src/scss'),
                use: [
                    // style-loader で変換した CSS のスタイルが記述された style タグを HTML に追加する
                    'style-loader',
                    // CSS をモジュールに変換する
                    'css-loader',
                    // Sass を CSS にコンパイルする
                    'sass-loader',
                ],
            },
        ],
    },
};
