
// var dt = new Date();
// console.log(dt);
// console.log(dt.getMonth()+1);
// console.log(dt.getDate());
// console.log(dt.getFullYear());

// var dtA = new Date('8/24/2010 14:50:10');
// var dtB = new Date(2010,7,24,14,50,10)

// console.log(dtA);
// console.log(dtB);

// var dtC = new Date('1/1/2000');
// var dayOfMonth = dtC.getDate();
// dtC.setDate(dayOfMonth-1);
// console.log(dtC);




// Task
// var start = new Date('1/1/2020');
// var end = new Date('1/1/2023');

// var milisecond = end - start;
// var saniye = milisecond / 1000;
// var dakika = saniye / 60;
// var saat = dakika / 60;
// var gun = saat / 24;

// console.log('milisecond :'+ milisecond)
// console.log('saniye : '+ saniye);
// console.log('dakika :'+ dakika);
// console.log('saat :' + saat);
// console.log('gun : '+ gun);



// Initialize a Date object representing a historical event
var eventDate = new Date('7/20/1969');
// Calculate the time difference between the event date and the current date
var currentDate = new Date();
var millisecondDiff = currentDate - eventDate;
// Convert milliseconds to seconds, minutes, hours, and days
var secondsDiff = millisecondDiff / 1000;
var minutesDiff = secondsDiff / 60;
var hoursDiff = minutesDiff / 60;
var daysDiff = hoursDiff / 24;
// Display the calculated time duration in the console
console.log('Time Since Apollo 11 Moon Landing:');
console.log('Milliseconds: ' + millisecondDiff);
console.log('Seconds: ' + secondsDiff);
console.log('Minutes: ' + minutesDiff);
console.log('Hours: ' + hoursDiff);
console.log('Days: ' + daysDiff);


