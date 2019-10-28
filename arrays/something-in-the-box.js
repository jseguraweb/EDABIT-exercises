// Create a function that returns true if an asterisk * is inside a box.

const inBox = arr => {
    return arr.some(element => (element.includes("*") ? true : false));
};

console.log(inBox([
    "###",
    "# #",
    "###"
]));
console.log(inBox([
    "###",
    "#*#",
    "###"
]));