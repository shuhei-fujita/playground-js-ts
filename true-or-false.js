// Runtime
// https://playcode.io/1593412

const values = [true, false, 1, -1, "hello", "0", "false", {}, [], function() {}, 0, "", null, undefined, NaN];

console.log("Using == comparison:");
values.forEach(value => {
    if (value == true) {
        console.log(`${value} is true`);
    } else if (value == false) {
        console.log(`${value} is false`);
    } else {
        console.log(`${value} is neither true nor false`);
    }
});

console.log("\nUsing === comparison:");
values.forEach(value => {
    if (value === true) {
        console.log(`${value} is true`);
    } else if (value === false) {
        console.log(`${value} is false`);
    } else {
        console.log(`${value} is neither true nor false`);
    }
});

