/**For this task, you will write two validators.

Shift Validator: When each element is translated (added or subtracted) by a constant.
Multiple Validator: When each element is multiplied (by a positive or negative number) by a constant. */

const isShifted = (arr1, arr2) => {
    const constants = [];
    arr1.map((element, index) => {
        constants.push(arr2[index] - element);
    });
    return constants.every(num => num === constants[0]);
};

const isMultiplied = (arr1, arr2) => {
    const constants = [];
    arr1.map((element, index) => {
        constants.push(arr2[index] / element);
    });
    return constants.every(num => num === constants[0]);
};

console.log(isShifted([1, 2, 3], [2, 3, 4])); // true
console.log(isShifted([1, 2, 3], [-9, -8, -7])); // true
console.log(isMultiplied([1, 2, 3], [10, 20, 30])); // true
console.log(isMultiplied([1, 2, 3], [-0.5, -1, -1.5])); // true
console.log(isMultiplied([1, 2, 3], [0, 0, 0])); // true
console.log(isShifted([1, 2, 3], [2, 3, 5])); // false
console.log(isShifted([1, 2, 3], [-9, -1, -7])); // false