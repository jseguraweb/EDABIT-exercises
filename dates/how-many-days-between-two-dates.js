// Create a function that takes two dates and returns the number of days between the first and second date.

const getDays = (date1, date2) => {

    const firstDate = new Date(date1);

    const lastDate = new Date(date2);

    const difference = lastDate - firstDate;

    const totalDays = Math.floor(difference / (24 * 60 * 60 * 1000));

    console.log(totalDays);

};

getDays(
    new Date("June 14, 2019"),
    new Date("June 20, 2019")
) // 6