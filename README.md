# playground-js

## ディレクトリ構成
- functions
    - 関数宣言
    - 関数式
    - アロー関数
    - 再帰関数
    - コールバック関数

- tests
    - ユニットテスト

## 実行方法
`functions`ディレクトリにある`[ファイル名].js`を実行しています。
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
`tests`ディレクトリにある`sum.test.js`を実行しています。
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

      at Object.<anonymous> (functions/expression_function.js:6:9)

 PASS  tests/sum.test.js
  ✓ adds 1 + 2 to equal 3 (1 ms)
  ✓ adds 1 + 2 to equal 3 (1 ms)
  ✓ adds 1 + 20 to equal 21
  ✓ adds 1 + 200 to equal 201

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        0.194 s, estimated 1 s
Ran all test suites.
✨  Done in 0.78s.
