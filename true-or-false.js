const falsyValues = [false, 0, "", null, undefined, NaN];
const truthyValues = [true, 1, -1, "hello", "0", "false", {}, [], function() {}];

falsyValues.forEach(value => {
    if (!value) {
        console.log(`${value} is false`);
    }
});

truthyValues.forEach(value => {
    if (value) {
        console.log(`${value} is true`);
    }
});

