//Base URL
const base_url = "https://api.rawg.io/api/";

const date = new Date();

//getting the month
const getCurrentMonth = () => {
  month = date.getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
// getting the day
const getCurrentDay = () => {
  day = date.getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};
// getting the day/month/year
const curYear = date.getFullYear();
const curDay = getCurrentDay();
const curMonth = getCurrentMonth();
const curDate = `${curYear}-${curMonth}-${curDay}`;

const lastYear = `${curYear - 1}-${curMonth}-${curDay}`;

console.log(curDate);
console.log(lastYear);

const popular_games = `games?key=5a95091bd5de416e92432912e8178035&dates=${lastYear},${curDate}&ordering=-rating&page_size=10`;

const popularGamesUrl = () => `${base_url}${popular_games}`;
console.log(popularGamesUrl());
