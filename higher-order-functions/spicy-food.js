// The facts are: 1. You've just finished dinner; 2. You love spicy food but your friend hates it.
// Given your friend's unfortunate taste preferences, you decide to split the bill only for non-spicy items. You will pay in full for the spicy dishes.
// Given two ordered arrays, one classifying the dishes as spicy vs.non - spicy and the other listing their prices, write a function that outputs an array where the first element is how much you pay and the second element is how much your friend pays.
// billSplit(["S", "N", "S", "S"], [13, 18, 15, 4]) ➞[41, 9]
// You pay: [13, 9, 15, 4] = 41
// Friend pays: [0, 9, 0, 0] = 9

const billSplit = (spicy, cost) => {

    let result = [0, 0];

    spicy.map((element, index) => {
        if (element === "S") {
            result[0] += cost[index];
        } else if (element === "N") {
            result[0] += cost[index] / 2;
            result[1] += cost[index] / 2;
        };
    });

    return result;
};

console.log(billSplit(['N', 'S', 'N'], [10, 10, 20]));
console.log(billSplit(['N', 'N'], [10, 10]));
console.log(billSplit(['S', 'S', 'S', 'N', 'N'], [8, 9, 8, 7, 7]));