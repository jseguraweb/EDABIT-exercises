// Suppose an image can be represented as a 2D array of 0s and 1s. Write a function to reverse an image. Replace the 0s with 1s and vice versa.

const reverseImage = image => {

    const changeNum = num => (num) ? 0 : 1;

    return image.map(element => element.map(num => changeNum(num)));
};

console.log("Original array: ", [[1, 0, 0], [0, 1, 0], [0, 0, 1]]);
console.log("Reverse array: ", reverseImage([[1, 0, 0], [0, 1, 0], [0, 0, 1]]));