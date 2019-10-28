// Write a function that takes two arrays and adds the first element in the first array with the first element
// in the second array, the second element in the first array with the second element in the second array, etc, etc. 
// Return true if all element combinations add up to the same number. Otherwise, return false.

const puzzlePieces = (a1, a2) => {

    const result = [];
    for (let i = 0; i < a1.length; i++) {
        result.push(a1[i] + a2[i]);
    }
    return (a1.length === a2.length && result.every(element => element === result[0]));
};

console.log(`First test:`, puzzlePieces([1, 2, 3, 4], [4, 3, 2, 1]));
console.log(`Second test:`, puzzlePieces([1, 4], [4, 1]));
console.log(`Third test:`, puzzlePieces([3, 4], [2, 1]));
console.log(`Fourth test:`, puzzlePieces([1, 2], [4, 3, 2, 1]));