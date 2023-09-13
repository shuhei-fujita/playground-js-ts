## Runtime

### Play Code
https://playcode.io/1593412

### Node.js

```
tsc true-or-false.ts --outFile myOutput.js
```

```
node myOutput.js
```

```
node true-or-false.js
```

```
$ node true-or-false.js
Using == comparison:
true is true
false is false
1 is true
-1 is neither true nor false
hello is neither true nor false
0 is false
false is neither true nor false
[object Object] is neither true nor false
 is false
function() {} is neither true nor false
0 is false
 is false
null is neither true nor false
undefined is neither true nor false
NaN is neither true nor false

Using === comparison:
true is true
false is false
1 is neither true nor false
-1 is neither true nor false
hello is neither true nor false
0 is neither true nor false
false is neither true nor false
[object Object] is neither true nor false
 is neither true nor false
function() {} is neither true nor false
0 is neither true nor false
 is neither true nor false
null is neither true nor false
undefined is neither true nor false
NaN is neither true nor false
```

## Using `==` comparison:

| Value            | Evaluation                 |
|------------------|----------------------------|
| `true`           | True                       |
| `false`          | False                      |
| `1`              | True                       |
| `-1`             | Neither true nor false     |
| `"hello"`        | Neither true nor false     |
| `"0"`            | Neither true nor false     |
| `"false"`        | Neither true nor false     |
| `{}` (Object)    | Neither true nor false     |
| `[]` (Array)     | Neither true nor false     |
| `function() {}`  | Neither true nor false     |
| `0`              | False                      |
| `""` (Empty String) | False                   |
| `null`           | Neither true nor false     |
| `undefined`      | Neither true nor false     |
| `NaN`            | Neither true nor false     |

## Using `===` comparison:

| Value            | Evaluation                 |
|------------------|----------------------------|
| `true`           | True                       |
| `false`          | False                      |
| `1`              | Neither true nor false     |
| `-1`             | Neither true nor false     |
| `"hello"`        | Neither true nor false     |
| `"0"`            | Neither true nor false     |
| `"false"`        | Neither true nor false     |
| `{}` (Object)    | Neither true nor false     |
| `[]` (Array)     | Neither true nor false     |
| `function() {}`  | Neither true nor false     |
| `0`              | Neither true nor false     |
| `""` (Empty String) | Neither true nor false  |
| `null`           | Neither true nor false     |
| `undefined`      | Neither true nor false     |
| `NaN`            | Neither true nor false     |

