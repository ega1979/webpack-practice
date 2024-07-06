// Node.js に組み込まれているモジュール。出力先などの指定をするために利用する。
const path = require('path');

module.exports = {
    // mode
    // 'development': 開発モード(リビルト時間短縮)が有効化’
    // 'production':ファイル圧縮やモジュールの最適化が有効化
    // 'none'
    mode: 'development',
    // entrypoint
    entry: './src/js/app.js',
    // output setting
    output: {
        // output path(絶対パス)
        path: path.resolve(__dirname, 'public'),
        filename: 'js/bundle.js',
    },
};