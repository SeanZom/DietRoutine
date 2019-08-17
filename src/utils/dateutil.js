const MONTH_NAME = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

export const getTheDateBefore = days => {
  let date = new Date();
  date.setDate(date.getDate() - days);
  return `${date.getDate()} ${MONTH_NAME[date.getMonth()]}`
};