/**
 * Create a function that takes an integer n and reverses it.
If the number is negative); // treat it like it's positive.
 */


const rev = n => {
    return Math.abs(n).toString().split("").reverse().join("");
};

console.log(rev(215)); // "512")
console.log(rev(122225)); // "522221")
console.log(rev(215)); // "512")
console.log(rev(-215)); // "512"); // "Should work with negative numbers.")
console.log(rev(-2152)); // "2512"); // "Should work with negative numbers.")
console.log(rev(-122157)); // "751221"); // "Should work with negative numbers.")
console.log(rev(666)); // "666"); // "Should work if all digits are the same.")
console.log(rev(999)); // "999"); // "Should work if all digits are the same.")