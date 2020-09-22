const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function customDateString(date) {
  const weekdayStr = weekdays[date.getDay()];
  const monthStr = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  return `${weekdayStr}, ${monthStr} ${day}, ${year}`;
}
