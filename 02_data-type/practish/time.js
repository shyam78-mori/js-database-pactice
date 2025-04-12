// Create a new Date object
let currentDate = new Date();

// Array of days to match with the current day's number
let daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Get the current day and time
let currentDay = daysOfWeek[currentDate.getDay()];
let currentHours = currentDate.getHours();
let currentMinutes = currentDate.getMinutes();
let currentSeconds = currentDate.getSeconds();

// Determine AM/PM
let amPm = currentHours >= 12 ? "PM" : "AM";

// Convert hours to 12-hour format
currentHours = currentHours % 12;
currentHours = currentHours ? currentHours : 12; // the hour '0' should be '12'

// Format time with leading zeros
currentMinutes = currentMinutes < 10 ? "0" + currentMinutes : currentMinutes;
currentSeconds = currentSeconds < 10 ? "0" + currentSeconds : currentSeconds;

// Display the result
console.log("Today is : " + currentDay);
console.log(
  "Current time is : " +
    currentHours +
    " " +
    amPm +
    " : " +
    currentMinutes +
    " : " +
    currentSeconds
);

let DateAndTime = new Date();
console.log(DateAndTime);
console.log(DateAndTime.toDateString());
console.log(DateAndTime.toTimeString());
console.log(DateAndTime.toLocaleDateString());

let myCreateDateTime = new Date(2023, 0, 23);
let myCreateDateTimeAndTiming = new Date(2023, 0, 23, 5, 6);
console.log(myCreateDateTimeAndTiming.toLocaleString());

console.log(myCreateDateTime);
console.log(myCreateDateTime.toDateString());
