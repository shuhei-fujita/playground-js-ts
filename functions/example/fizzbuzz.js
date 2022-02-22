let result = 1;

function fizzbuzz(number) {
    for (var i = 1; i <= number; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FIZZBUZZ");
        } else if (i % 3 == 0) {
            console.log("FIZZ");
        } else if (i % 5 == 0) {
            console.log("BUZZ");
        } else {
            console.log(result);
        }

        result++;
    }
}

fizzbuzz(100);
