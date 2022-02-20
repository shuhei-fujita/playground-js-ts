// 再帰関数
// 自分自身を呼び出す関数を再帰関数

// 階乗
function sum(number) {
    let result = 0;
    console.log(number);

    if (number <= 1) {
        return result += 1; // 通常
    }
    
    return result += number * sum(number - 1);  // 再帰
}

console.log('合計：' + sum(3));
