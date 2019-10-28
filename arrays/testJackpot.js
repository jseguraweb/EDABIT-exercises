const testJackpot = result => {
    const firstElement = result[0];
    const elements = result.filter(element => element === firstElement);
    return elements.join("") === result.join("");
}

console.log(testJackpot(['@', '@', '@', '@']));