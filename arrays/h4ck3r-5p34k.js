// Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.
//In order to work properly, the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.

const hackerSpeak = str => {

    return str.split("").map(el => {
        if (el === "a") { return el = "4" }
        else if (el === "e") { return el = "3" }
        else if (el === "i") { return el = "1" }
        else if (el === "o") { return el = "0" }
        else if (el === "s") { return el = "5" }
        return el;
    }).join("");

};

console.log(hackerSpeak("javascript is cool"));
console.log(hackerSpeak("become a coder"));
console.log(hackerSpeak("hi there"));
console.log(hackerSpeak("programming is fun"));
console.log(hackerSpeak("keep on practicing"));