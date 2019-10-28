/**Create a function that reorders the digits of each numerical element in an array based on ascending (asc)
 or descending (desc) order.*/


const reorderDigits = (arr, direction) => {
    const roundAsc = array => array.map(num => num.sort((a, b) => a - b));
    const roundDesc = array => array.map(num => num.sort((a, b) => b - a));
    const getSingleArray = arr.map(el => el.toString().split(""));

    if (direction === "asc") {
        return roundAsc(getSingleArray).map(el => parseInt(el.join("")));
    } else if (direction === "desc") {
        return roundDesc(getSingleArray).map(el => parseInt(el.join("")));
    }
};

console.log(reorderDigits([515, 341, 98, 44, 211], 'asc'));
console.log(reorderDigits([515, 341, 98, 44, 211], 'desc'));
console.log(reorderDigits([63251, 78221], 'asc'));
console.log(reorderDigits([63251, 78221], 'desc'));