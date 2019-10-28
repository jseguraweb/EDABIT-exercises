// Write a function that reverses a string. Make your function recursive.

const reverse = str => {

    return str.split("").reverse().join("");

};

console.log(reverse("hello")); // "olleh"