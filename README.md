# playground-js

## ディレクトリ構成
- function
    - 関数宣言
    - 関数式
    - アロー関数
    - 再帰関数
    - コールバック関数

- test
    - ユニットテスト

## 実行方法
```js
node [ファイル名].js
```

（例）
```js
// 実行コマンド
node arrow_function.js

// 実行結果
2
```

## テスト実行方法
```js
yarn test
```

（例）
```js
// 実行コマンド
yarn test

// 実行結果
yarn run v1.22.10
$ jest
  console.log
    3

      at Object.<anonymous> (function/expression_function.js:6:9)

 PASS  test/sum.test.js
  ✓ adds 1 + 2 to equal 3 (1 ms)
  ✓ adds 1 + 2 to equal 3 (1 ms)
  ✓ adds 1 + 20 to equal 21
  ✓ adds 1 + 200 to equal 201

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        0.207 s, estimated 1 s
Ran all test suites.
✨  Done in 1.03s.
```
