# redux-test-example

React+Reduxな環境で動くものに対してテストを行っていくにはどうしたら良いかのお勉強用に作ってみた。

テスト内容は雑だけどとりあえずReact要素とRedux要素を取り入れつつMocha+power-assertなテスト環境でKarmaを使ってテストできるようになったので満足。

このあたりの知識皆無な状態からのお勉強だったのでメモっておく。

なお、実コードの方は http://redux.js.org/docs/basics/ExampleTodoList.html のをまるごと移植している。

## 使ったもの

* React
* Redux
* ES6
* Mocha
* power-assert
* Karma

### ついでに使ったもの

* browserify
* babelify
* babel-preset-es2015
* babel-preset-react
* browser-sync
* watchify

## requirements

npmが使える環境

## install

```
make install
```

これでとりあえず環境は揃うはず

## build

```
make build
```

React+ES6なやーつをbrowserifyとbabelifyを用いてビルドする。

設定値として`.babelrc`に記述されている内容が用いられる

public/bundle.jsにビルドされた内容が書き込まれる

## tests

今回は勉強用にMocha単体で動かすテストとKarma経由で動かすテストを用意してみた。

まぁでもReactだのReduxだのをテストしていくんだったらKarma経由になるのかな？

### Mocha Test

```
make tests
```

compilerとしてpower-assert化+ES5化+React化するような設定をはさみつつMochaでテスト実行する。

`--watch`オプションを入れているのでファイルの変更を検知して勝手にテストが回ってくれる。

### Karma Test

```
make browser-tests
```

Karma経由でテストが実行される。

`karma.conf.js`が設定値として読み込まれる。

この中で
* テスト対象のファイルの設定
* Mochaで動かすようにする設定
* Browserifyを噛ませてビルドする設定
* ビルド時にBabelifyを使うようにする設定
* プラグインとしてpower-assert化+ES5化+React化する設定
* ...etc

などなどをよしなにしている。

変更検知の設定も入れているのでこちらも`make tests`同様ファイルの変更を検知して勝手にテストが回ってくれる。

ブラウザの指定として`Chrome`決め打ちで今回は雑に設定したので、Chromeが使える環境じゃないと動かない。

ちゃんとするならデフォルトは指定せずにコマンド実行時にオプションで渡すのかな？

## 動作サーバー構築

```
make server PORT=xxxx (default: 3000)
```

watchifyを使ってファイルの変更を検知してよしなに自動ビルドしつつ、browser-syncを使ってpublicディレクトリ下にサーバーを立てている。

PORTのデフォルトは3000番のようだけど変えたい場合もあったので`--port`オプションを通すようにした。

雑に&つなぎで実行してるけどもう少し上手くやれるかな。Foremanでもこしらえればよいかな？

# メモ

## Mocha
## power-assert
## Karma
## browserify
## babelify
## babel-preset-es2015
## babel-preset-react
## browser-sync
## watchify
