// Create a function that counts the number of times a particular letter shows up in the word search.

const letterCounter = (arr, letter) => {

    // return arr.reduce((counter, element) => {
    //     arr.map(element => element.map(word => {
    //         if (word === letter) {
    //             return counter += 1;
    //         }
    //     }));
    // }, 0);

    let counter = 0;
    arr.map(element => element.map(word => word === letter ? counter += 1 : false));
    return counter;

};

console.log((letterCounter([
    ['D', 'E', 'Y', 'H', 'A', 'D'],
    ['C', 'B', 'Z', 'Y', 'J', 'K'],
    ['D', 'B', 'C', 'A', 'M', 'N'],
    ['F', 'G', 'G', 'R', 'S', 'R'],
    ['V', 'X', 'H', 'A', 'S', 'S']
], 'D')));

console.log((letterCounter([
    ['D', 'E', 'Y', 'H', 'A', 'D'],
    ['C', 'B', 'Z', 'Y', 'J', 'K'],
    ['D', 'B', 'C', 'A', 'M', 'N'],
    ['F', 'G', 'G', 'R', 'S', 'R'],
    ['V', 'X', 'H', 'A', 'S', 'S']
], 'H')));