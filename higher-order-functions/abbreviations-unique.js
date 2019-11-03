/**You are given two inputs:

A array of abbreviations.
An array of words.
Write a function that returns true if each abbreviation uniquely identifies a word, and false otherwise.

 */

const uniqueAbbrev = (abbs, words) => {

    const abbsLength = abbs.map(el => el.length);
    const wordsAbbreviated = words.map((word, index) => {
        console.log(word.substring(0, abbs[index].length))
    })

};

console.log(uniqueAbbrev(["at", "o", "abe"], ["atom", "original", "abet"])); // true
// console.log(uniqueAbbrev(["rh", "par", "re"], ["rhino", "parry", "residue"])); // true
// console.log(uniqueAbbrev(["ho", "h", "ha"], ["house", "hope", "happy"])); // false
// console.log(uniqueAbbrev(["bi", "ba", "bat"], ["big", "bard", "battery"])); // false
// console.log(uniqueAbbrev(["b", "c", "ch"], ["broth", "chap", "cardigan"])); // false