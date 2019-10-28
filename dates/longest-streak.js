// Create a function that takes an array of date objects and return the "longest streak" (i.e. number of consecutive days in a row).

const longestStreak = arr => {

    if (arr.length == 0) return 0;
    else if (arr.length == 1) return 1;
    else {
        var lastCount = 0, count = 1;
        for (var i = 0; i < arr.length - 1; i++) {
            var one = new Date(arr[i].date);
            var two = new Date(arr[i + 1].date);
            if (two - one === 86400000)
                count++;
            else {
                lastCount = count > lastCount ? count : lastCount;
                count = 1;
            }
        }
    }

    return count > lastCount ? count : lastCount
};

// console.log(longestStreak([{ "date": "1985-03-19" }])); // 1

console.log(longestStreak([
    {
        "date": "2019-09-18"
    },
    {
        "date": "2019-09-19"
    },
    {
        "date": "2019-09-20"
    },
    {
        "date": "2019-09-26"
    },
    {
        "date": "2019-09-27"
    },
    {
        "date": "2019-09-30"
    }
])); // 3
