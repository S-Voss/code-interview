
dividers = [2, 3, 4, 5, 6, 7, 8, 9, 10]

//  Create a primeChecker function which sorts the prime numbers into another array.

function primeChecker() {
    for (i = 1, i < 101, i++) {
        if (i % dividers[i] > 0) {
            console.log(i + ":" + " " + "Prime Number");
        }
    };
};