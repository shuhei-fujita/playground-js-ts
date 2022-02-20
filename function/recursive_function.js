// 再帰関数
// 自分自身を呼び出す関数を再帰関数

// 階乗
function sum(number) {
    let result = 0;

    if (number <= 1) {
        return result = result + 1;
    }

    return result = result + (number * sum(number - 1));
}

console.log(sum(3));
