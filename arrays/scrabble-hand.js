function maximumScore(tileHand) {
    let maxScore = 0;
    tileHand.map(element => {
        const score = element.score;
        maxScore += score;
    });

    return maxScore;
}

console.log(maximumScore([{ tile: 'N', score: 1 }, { tile: 'K', score: 5 }, { tile: 'Z', score: 10 }, { tile: 'X', score: 8 }, { tile: 'D', score: 2 }, { tile: 'A', score: 1 }, { tile: 'E', score: 1 }])); // 28
