# webpack-practice
- WEBPACK備忘録用
- [WEBPACK実践入門 第2版](https://amzn.asia/d/00YlyckX) に基づき練習記録

## 項目
- getting-started-webpack
  - webpackをとりあえず使ってみる
  - "dependencies" > "jquery": "^3.6.0"
- using-babel-loader
  - babel-loaderでES2015+をトランスパイル
  - "devDependencies" > "@babel/core": "7.13.10","@babel/preset-env": "7.13.12","babel-loader": "8.2.2"
- using-sass-loader-css-loader-style-loader
  - sass-loader/css-loader/style-loaderでSassファイルをバンドル
  - "devDependencies" > "css-loader": "5.2.0","sass": "^1.32.8","sass-loader": "^11.0.1"
- using-post-css-loader
  - post-css-loader/Autoprefixerでベンダープレフィックスを追加したCSSを出力
  - "devDependencies" >  "autoprefixer": "^10.2.5", "css-loader": "^5.2.0", "postcss": "^8.2.8", "postcss-loader": "^5.2.0", "sass": "^1.32.8", "sass-loader": "^11.0.1","style-loader": "^2.0.0",
- using-webpack-merge
  - webpack-mergeでwebpackの設定ファイルを開発用/本番用で分割
  - dev: devtool:'eval-cheap-module-source-map'
  - production:"terser-webpack-plugin": "^5.1.1"
- using-mini-css-extract-plugin
  - mini-css-extract-pluginでバンドルされるCSSを別のCSSファイルに抽出
  - "devDependencies" > "css-loader": "^5.2.0","mini-css-extract-plugin": "^1.4.0","sass": "^1.32.8","sass-loader": "^11.0.1","style-loader": "^2.0.0"
- using-webpack-bundle-analyzer
  - webpack-bundle-analyzerでバンドルに含まれているモジュール、それぞれのモジュールのファイルサイズを出力
  - "devDependencies" > "webpack-bundle-analyzer": "^4.4.0"
  - "dependencies" > "jquery": "^3.6.0"
- using-multiple-entry-points
  - 複数のエントリーポイントからバンドルを出力
  - entryをappとsearch
- using-watch-mode
  - watchモードを有効にしてファイルの変更を検知してリビルド
  - webpack --watch　※"scripts"を'dev'で使っている
- inline-a-file-using-asset-modules
  - Asset Modulesで画像をDataURLに変換してバンドル
  - "devDependencies" > "css-loader": "^5.2.0","sass": "^1.32.8","sass-loader": "^11.0.1","style-loader": "^2.0.0"
  - module:>rules:>type: 'asset:inline'
- emit-a-file-using-asset-modules
  - Asset Modulesで画像を出力
  - "devDependencies" > "css-loader": "^5.2.0","sass": "^1.32.8","sass-loader": "^11.0.1","style-loader": "^2.0.0"
  - type: 'asset/resource'
- inline-and-emit-a-file-using-asset-modules
  - Asset Modulesで4KB未満ならDataURLに変換してバンドル、4KB以上なら画像はバンドルせず出力
  - "devDependencies" > "css-loader": "^5.2.0","sass": "^1.32.8","sass-loader": "^11.0.1","style-loader": "^2.0.0"
  - module:>rules:>type: 'asset'/parser:/generator:
- using-cleanup
  - output.pathに指定したディレクトリ内のファイルを削除してからバンドルされたファイルを出力
  - output: > clean: true
- using-webpack-dev-server
  - webpack-dev-server(開発用サーバー)のライブリロード機能
  - "devDependencies" > "webpack-dev-server": "5.0.4"
- using-source-map
  - devtool: 'eval-cheap-module-source-map'
  - ソースマップを生成
- using-tree-shaking
  - Tree Shakingを使って不要なコードを削除
  - "dependencies" > "lodash-es": "4.17.21"
- using-split-chunks-plugin
  - SplitChunksPluginを使って共通利用されているチャンクを分割したファイルを出力し、全体のファイルサイズを削減
  - "devDependencies" > "terser-webpack-plugin": "5.1.1"
  - "dependencies" > "lodash-es": "4.17.21"

## 動作環境
- Node.js: v20.12.2
- npm: v10.5.0

## Webpackのバージョン周り
- "webpack": "^5.30.0"
- "webpack-cli": "^4.6.0"

### 注
※webpack-dev-serverがバージョン上depricatedになり、起動しなかったためwebpack-cli(5.1.4)、webpack-dev-server(5.0.4)をlatestで変更して対応