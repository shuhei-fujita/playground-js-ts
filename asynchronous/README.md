# Asynchronous

このディレクトリは、JavaScriptにおける非同期処理の概念と実装に関するサンプルコードを提供します。

## ソースコードの構成

callback.js:
- callbackを使用した非同期処理の例
- `fs.readFile`を使用して`example.txt`を読み込み、コンソールに内容を出力します。

promise.js:
- `fs.promises.readFile`を使用して`example.txt`を読み込み、コンソールに内容を出力します。

async-await.js:
- `async`と`await`を使用して`fs.promises.readFile`から`example.txt`を読み込み、コンソールに内容を出力します。

## それぞれの歴史

Callback:
- JavaScriptの初期から存在していた非同期処理の方法。

Promise:
- ECMAScript 2015（ES6）で導入されました。
- Promiseは内部でコールバック関数を使用しています。成功したらresolve()を、失敗したらreject()を呼び出します。
- then()とcatch()で、それぞれ成功と失敗時の処理を書きます。

Async/Await:
- ECMAScript 2017（ES8）で導入されました。
- async/awaitはPromiseをより読みやすく書くための構文です。async関数内でawaitを使うと、Promiseが解決されるまで待ってくれます。
- async/awaitは内部でPromiseを使用しています。awaitはPromiseが解決するまで処理を一時停止し、その結果を返します。
- try: エラーが発生する可能性のあるコードをこのブロック内に書きます。
- catch: tryブロック内でエラーが発生した場合に実行されるブロックです。
