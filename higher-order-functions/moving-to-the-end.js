// Write a function that moves all elements of one type to the end of the array.

const moveToEnd = (arr, el) => {

    const arrayWithoutEl = arr.filter(element => element !== el);
    const elementSearched = arr.filter(element => element === el);
    return arrayWithoutEl.concat(elementSearched);
};

console.log(moveToEnd([1, 3, 2, 4, 4, 1], 1));
console.log(moveToEnd([7, 8, 9, 1, 2, 3, 4], 9));
console.log(moveToEnd(["a", "c", "c", "c", "b", "c"], "c"));