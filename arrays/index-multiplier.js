/** 
Return the sum of all items in an array, where each item is multiplied by its index (zero-based). For empty arrays, return 0.
*/

const indexMultiplier = arr => {
    const multipliedNumbers = arr.map((element, index) => element * index);
    return multipliedNumbers.reduce(((acc, curr) => acc += curr), 0)
};


console.log(indexMultiplier([9, 3, 7, -7])); // -4
console.log(indexMultiplier([3, 8, 6, -4])); // 8
console.log(indexMultiplier([10, -9, -2, 0, 2])); // -5
console.log(indexMultiplier([4, 4, 2, 2, -4])); // -2
console.log(indexMultiplier([9, 4, 7, 5, -1, -3])); // 14
console.log(indexMultiplier([-9, 5, 9, 5, -7, 7])); // 45
console.log(indexMultiplier([-1, -2, 8, -5])); // -1