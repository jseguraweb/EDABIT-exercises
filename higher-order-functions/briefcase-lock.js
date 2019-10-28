/*A briefcase has a 4-digit rolling-lock. Each digit is a number from 0-9 that can be rolled either forwards or backwards.

Create a function that returns the smallest number of turns it takes to transform the lock from the current combination to the target combination. One turn is equivalent to rolling a number forwards or backwards by one.

To illustrate:

current-lock: 4089
target-lock: 5672
What is the minimum number of turns it takes to transform 4089 to 5672?
It takes 1 + 4 + 1 + 3 = 9 minimum turns to change the lock from 4089 to 5672.*/



const minTurns = (current, target) => {

    const currentNum = current.split("");
    const targetNum = target.split("");
    const difference = currentNum.map((element, index) => Math.abs(element - targetNum[index]));

    const result = difference.map(element => element > 5 ? (10 - element) : element);
    return result.reduce((acc, curr) => acc += curr, 0);
};

console.log(minTurns("4089", "5672")); // 9
console.log(minTurns("1732", "4444")); // 9
console.log(minTurns("7109", "2332")); // 13
console.log(minTurns("2391", "4984")); // 10
console.log(minTurns("1234", "3456")); // 8
console.log(minTurns("1111", "1100")); // 2
console.log(minTurns("1111", "0000")); // 4
console.log(minTurns("0000", "9999")); // 4