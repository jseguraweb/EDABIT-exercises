function isEmpty(obj) {
    const numKeys = Object.keys(obj);
    if (numKeys.length > 0) { return false } else { return true };
}

console.log(isEmpty({}));
console.log(isEmpty({ z: 2, w: 4, y: 5 }));