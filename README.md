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

今回ので学んだなんとなくの所感。

## Mocha

JavaScriptのテスティングフレームワーク。

## power-assert

`assert`にすべての情熱を注いでassertが落ちたときにわかりやすい情報を表示してくれるテストツール。

「とりあえず`assert`だけ使えばOK」っていうスタンスにもってけて学習コストも少なくなって素晴らしい！

## Karma

複数の実際のブラウザでテストが行えるテストランナーツール。

「実際のブラウザだと正しく動きませんでしたー！ババーン！」みたいな自体になりにくくなる

KarmaでMochaなど諸々を包んでよしなに状態で実際のブラウザでのテストを走らせられるようにできる。

## Browserify

モジュール感の依存解決やファイルの結合を行うためのビルドツール。

Nods.jsのモジュールをブラウザでも、といったことがもともとの内容だったけど最近は専らビルドツール側としてメリットからの登用が多い様子。(始めたばかりなので歴史はあまりわかっていない)

「いっぱいjsのファイルがあるけども、とりあえずバンっとビルドして一纏めにしてあげるよ！あとは出来上がった1ファイルをhtmlで読み込んであげるだけだよ！楽ちんでしょ！」みたいなノリの需要と思っているw

## Babelify

Browserifyするときによしなにバベって上げる君。

※ バベる･･･「ES6で書かれていたりReactで書かれていたりするのをよしなに普通の環境で動くようにしてあげる」的な意味と思っている

## babel-preset-es2015

「ES6で書かれているのをよしなに普通の環境で動くようにしてあげる」君

## babel-preset-react

「Reactで書かれているのをよしなに普通の環境で動くようにしてあげる」君

## browser-sync

「変更を検知してブラウザ更新もよしなにしてくれる」君

指定したポートにローカルサーバーと立ててくれて、そこで動作確認をできる

ファイルを更新してブラウザを見たらもう反映されてる！みたいな感じ

また、いろいろなタブだったりブラウザだったりを起動して立てたサーバーにアクセスしてても全てよしなにブラウザ更新をかけてくれる

おまけにbrowser-sync用の管理画面も立ててくれていて、そこで現在の接続数だったり、通信速度の制限をかけてどうなるかを見たり、といったことができる。

`localhost:3000` にて画面が表示されるので動作を確認して、`localhost:3001`で管理画面を表示していろいろいじってみたり、といった使い方ができる。

ただ、今回触った感じだとパット見「変更を検知した時にビルドをしてブラウザ更新までよしなにしてくれる」みたいなとこまではできなさそうだったので、次にメモするWatchifyの方向からサポートした。

## Watchify

「変更を検知した時にビルドをしてくれる」君

変更を検知してBrowserifyを走らせられる感じ。

これがあればまぁ開発時は手動ビルドすることはないんじゃないかなと思った。

デプロイの時とかは明示的にBrowserifyでビルドしてぽん起きデプロイとかになるのかな？

browser-syncの時に書いたように今回はWatchify+browser-syncで「変更を検知した時にビルドをしてブラウザ更新までよしなにしてくれる」機構を作った。

けどこれbrowser-syncの方でよしなにできそうだな〜できないのかな〜なんて思いつつw


# 所感

とりあえず今まで全然わかってなかったライブラリ周りに触れて実際に動かせてなんとなくはわかったので良かった！
