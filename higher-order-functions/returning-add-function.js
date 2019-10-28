// Given a number, n, return a function which adds n to the number passed to it.

const add = num => {

    let value = num;
    const addNum = number => value += number;
    return addNum;
};

console.log(add("a")("b")); // ab
console.log(add(20)(10)); // 30
console.log(add(30)(10)); // 40
console.log(add(100)(100)); // 200