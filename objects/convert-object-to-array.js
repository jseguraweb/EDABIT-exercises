function objectToArray(obj) {
    const myArray = Object.entries(obj);
    return myArray;
}

console.log(objectToArray({
    D: 1,
    B: 2,
    C: 3
}))