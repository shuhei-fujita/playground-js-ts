// コールバック関数
setTimeout(
    function() {
        console.log('setTimeout');
    },
    1000
);

const arrayNumber = [1, 2, 3, 4, 5];
const result = arrayNumber.map(function(value) {
    return value
});
console.log(result);
