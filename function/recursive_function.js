// 再帰関数
// 自分自身を呼び出す関数を再帰関数
function sum(number1, number2) {
    let count = 0;

    function recursive() {
        if (number1 >= number2) {
            count++;
            number1 = number1 - number2;
            console.log(number1);

            recursive();
        }
    }

    recursive();
    return count;
}

sum(10, 2);
