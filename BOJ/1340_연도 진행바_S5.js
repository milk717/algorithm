const monthCode = {
    January: 1,
    February: 2,
    March: 3,
    April: 4,
    May: 5,
    June: 6,
    July: 7,
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12
};
const monthCntArr = [31,28,31,30,31,30,31,31,30,31,30,31];
const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let [month, day, year, time] = fs.readFileSync(filePath).toString().trim().split(' ');
month = monthCode[month];
day = +day.slice(0, -1);
year = +year;

const isLeapYear = (year)=>{
    return ((year % 400 === 0) || (year%4===0 && year % 100 !== 0));
}

const calculateTotalYearDate = (year)=>{
    return isLeapYear(year) ? 366 : 365;
}

const calculateDate = (year,month, day) =>{
    let tmp = 0;
    for(let i = 0; i<month-1; i++){
        if(isLeapYear(year) && i === 1) tmp += 1;
        tmp += monthCntArr[i];
    }
    tmp += day;
    return tmp-1;
}

const dayToMinutes = (day) =>{
    return day * 60 * 24;
}

const calculateTime = (time) =>{
    let res = 0;
    let [hour, minute] = time.split(':').map(v => +v);
    res += hour*60;
    res += minute;
    return res;
}
const res = (dayToMinutes(calculateDate(year, month, day)) + calculateTime(time)) / dayToMinutes(calculateTotalYearDate(year))*100;
console.log(Number.isInteger(res) ? res+'.0':res);
