// Create a function that takes in an array of integers returns the number of even or odd digits for each number, depending on the parameter.
// countDigits([22, 53, 99, 61, 777, 8], "odd") ➞ [0, 2, 2, 1, 3, 0]

const countDigits = (arr, type) => {
    const getSingleArrays = arr.map(el => el.toString().split(""));
    const getSingleNums = getSingleArrays.map(el => el.map(num => parseInt(num)));
    const evenDigits = getSingleNums.map(el => el.map(num => num % 2 === 0));
    const ifEven = evenDigits.map(el => el.map(num => {
        if (num === true) { num = 1; } else { num = 0 };
        return num;
    }));
    const ifOdd = evenDigits.map(el => el.map(num => {
        if (num === true) { num = 0; } else { num = 1 };
        return num;
    }));

    if (type === "even") {
        return ifEven.map(el => el.reduce((acc, curr) => acc += curr), 0);
    }
    else if (type === "odd") {
        return ifOdd.map(el => el.reduce((acc, curr) => acc += curr), 0);
    }
};

console.log(countDigits([22, 53, 99, 61, 777, 8], "odd")); // [0, 2, 2, 1, 3, 0]
console.log(countDigits([22, 53, 99, 61, 777, 8], "even")); // [2, 0, 0, 1, 0, 1]
console.log(countDigits([54, 113, 89, 10], "odd")); //, [1, 3, 1, 1]
