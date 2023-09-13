// true-or-false.ts

const trueValue: boolean = true;
const falseValue: boolean = false;
const positiveOne: number = 1;
const negativeOne: number = -1;
const helloString: string = "hello";
const zeroString: string = "0";
const falseString: string = "false";
const emptyObject: object = {};
const emptyArray: any[] = []; // Arrays are generic, so we can use any[] if the type of elements is not known.
const sampleFunction: Function = function() {};
const zeroNumber: number = 0;
const emptyString: string = "";
const nullValue: null = null;
const undefinedValue: undefined = undefined;
const nanValue: number = NaN;

const values = [
    trueValue, 
    falseValue, 
    positiveOne, 
    negativeOne, 
    helloString, 
    zeroString, 
    falseString, 
    emptyObject, 
    emptyArray, 
    sampleFunction, 
    zeroNumber, 
    emptyString, 
    nullValue, 
    undefinedValue, 
    nanValue
];

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

