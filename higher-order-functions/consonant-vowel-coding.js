/**Create a function that takes in a sentence and returns a running list of consonants per word and vowels per word.
 */

const stringCode = sentence => {

    const isVowel = word => {
        for (let i = 0; i < word.length; ++i) {
            if (word.includes("a") ||
                word.includes("A") ||
                word.includes("e") ||
                word.includes("E") ||
                word.includes("i") ||
                word.includes("I") ||
                word.includes("o") ||
                word.includes("O") ||
                word.includes("u") ||
                word.includes("U")) { return true } return false;
        }
    };

    const getSingleWords = sentence.split(" ").map(el => [el]);

    console.log(getSingleWords.map(el => isVowel(el)));
};


// console.log(stringCode("I'd like to drink my first glass of champagne.")); // ['1 2 1 4 2 4 4 1 6', '1 2 1 1 0 1 1 1 3'])
// console.log(stringCode("The first man to walk on the moon was Neil Armstrong.")); // ['2 4 2 1 3 1 2 2 2 2 7', '1 1 1 1 1 1 1 2 1 2 2'])
// console.log(stringCode("I've got a lovely bunch of coconuts.")); // ['1 2 0 4 4 1 5', '2 1 1 2 1 1 3'])
console.log(stringCode("There they are a'standing in a row.")); // ['3 3 1 6 1 0 2', '2 1 2 3 1 1 1'])