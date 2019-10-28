// Given a Date() object, return the date from three days prior as a string: "2016-01-19".

const threeDaysAgo = date => {

    const newDate = new Date(date - (1000 * 60 * 60 * 24 * 2));
    return newDate.toISOString().substring(0, 10);

};


console.log(threeDaysAgo(new Date(2018, 0, 1))) // "2017-12-29"
console.log(threeDaysAgo(new Date(2015, 5, 17))) // "2015-06-14"
console.log(threeDaysAgo(new Date(1965, 3, 15))) // "1965-04-12"
