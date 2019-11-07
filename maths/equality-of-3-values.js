/**
 * Create a function that takes three integer arguments (a, b, c) and returns the number of equal values.
 */

const equal = (a, b, c) => {

    const newObj = new Set();
    newObj.add(a);
    newObj.add(b);
    newObj.add(c);
    if (newObj.size === 1) { return 3 }
    else if (newObj.size === 2) { return 2 }
    else if (newObj.size === 3) { return 0 };
};

console.log(equal(2, 3, 4)); // 0, "All values are differents"
console.log(equal(7, 3, 7)); // 2, "Two values are equal"
console.log(equal(4, 4, 4)); // 3, "All 3 values are equal"
console.log(equal(7, 3, 4)); // 0, "All values are differents"
console.log(equal(3, 3, 6)); // 2, "Two values are equal"
console.log(equal(1, 1, 1)); // 3, "All 3 values are equal"
console.log(equal(1, 7, 6)); // 0, "All values are differents"
console.log(equal(7, 7, 7)); // 3, "All 3 values are equal"
