// Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).

const removeDups = arr => {
    return Array.from(new Set(arr));
};

console.log(removeDups(['John', 'Taylor', 'John']));