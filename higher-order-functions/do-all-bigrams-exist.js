/**You are given an input array of bigrams, and an array of words.
Write a function that returns true if you can find every single bigram from this array can be found at least once in an array of words.
 */

const canFind = (bigrams, words) => {
    const result = [];
    for (let i = 0; i < bigrams.length; i++) {
        const includesBigram = [];
        for (j = 0; j < words.length; j++) {
            includesBigram.push((words[j].includes(bigrams[i])));
        }
        result.push(includesBigram);
    }

    const everyBigram = result.map(boolean => boolean.some(el => el === true))

    return everyBigram.every(el => el)
};

console.log(canFind(["at", "be", "th", "au"], ["beautiful", "the", "hat"])) // true
console.log(canFind(["bo", "ta", "el", "st", "ca"], ["books", "table", "cap", "hostel"])) // true
console.log(canFind(["la", "te"], ["latte"])) // true
console.log(canFind(["th", "fo", "ma", "or"], ["the", "many", "for", "forest"])) // true
console.log(canFind(["ay", "be", "ta", "cu"], ["maybe", "beta", "abet", "course"])) // false
console.log(canFind(["oo", "mi", "ki", "la"], ["milk", "chocolate", "cooks"])) // false
console.log(canFind(["la"], [])) // false
console.log(canFind(["la", "at", "te", "ea"], ["latte"])) // false