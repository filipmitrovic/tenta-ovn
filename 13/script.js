/* Implement your solution here */
function getTodayDate() { // FORMAT: Wednesday 12 December 2018
    let time = new Date();
    //weekday in Letter
    let weekdayArr = new Array(7);
    weekdayArr[0] =  "Sunday";
    weekdayArr[1] = "Monday";
    weekdayArr[2] = "Tuesday";
    weekdayArr[3] = "Wednesday";
    weekdayArr[4] = "Thursday";
    weekdayArr[5] = "Friday";
    weekdayArr[6] = "Saturday";
    let weekday = weekdayArr[time.getDay()];
    //day in month
    let day = time.getDate();
    //month in letters
    let monthArr = new Array(7);
    monthArr[0] =  "December";
    monthArr[1] = "January";
    monthArr[2] = "February";
    monthArr[3] = "March";
    monthArr[4] = "April";
    monthArr[5] = "May";
    monthArr[6] = "June";
    monthArr[6] = "July";
    monthArr[6] = "August";
    monthArr[6] = "September";
    monthArr[6] = "October";
    monthArr[6] = "November";
    monthArr[6] = "December";
    let month = monthArr[time.getDay()];
    // Year
    let year = time.getFullYear();
    console.log(weekday + ' ' + day + ' ' + month + ' ' +year);
}
getTodayDate();
