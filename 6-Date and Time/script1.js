//  var dt = new Date();

// // 1ci Get yoxla   2ci Set   3cu Data   4cu sonuncu console-ni yaz

// //2 Set Methods
// dt.setFullYear(2013);
// dt.setMonth(7);
// dt.setDate(15);
// dt.setHours(11);

// //1 Get Methods
// console.log(dt);
// console.log(dt.getDay());
// console.log(dt.getHours());
// console.log(dt.getFullYear());
// console.log(dt.getTime());
// console.log(dt.getDate());
// console.log(dt.getMonth()+1);

// 3 Data Object
// let birthDay =  new Date(1992,4,26);
// console.log(dt.getFullYear() - birthDay.getFullYear());

// var currentDate = new Date();
// var targetDate = new Date('04/26/1992');
// var difference = currentDate - targetDate;
// var daysDifference = Math.round(difference / (1000 * 60 * 60 * 24));
// console.log('Difference in days:', daysDifference);

// var userInput = prompt("Enter a date (YYYY-MM-DD):");
// var userDate = new Date(userInput).getTime();
// if (!isNaN(userDate)) {
//   var currentDate = new Date();
//   var difference = currentDate - userDate;
//   var daysDifference = Math.round(difference / (1000 * 60 * 60 * 24));
//   console.log("Difference in days:", daysDifference);
// }


var userInput = prompt("Enter a date (YYYY-MM-DD):");
function CountDays(userInput) {
  var userDate = new Date(userInput).getTime();
  if (!isNaN(userDate)) {
    var currentDate = new Date();
    var difference = currentDate - userDate;
    var daysDifference = Math.round(difference / (1000 * 60 * 60 * 24));
    console.log("Difference in days:", daysDifference);
    return daysDifference;
  }
}
var result = CountDays(userInput);





// var userInput = prompt("Enter a date (YYYY-MM-DD):");

// function CountDays(userInput) {
//   var userDate = new Date(userInput).getTime();

//   if (isNaN(userDate)) {
//     // Eğer userDate bir sayı değilse (geçersiz bir tarih), uyarı mesajı göster
//     alert("duzgun format deyilş Duzgun format budur: (YYYY-MM-DD).");
//     return; // Fonksiyondan çık, işlemi devam ettirme
//   }

//   var currentDate = new Date();
//   var difference = currentDate - userDate;
//   var daysDifference = Math.round(difference / (1000 * 60 * 60 * 24));

//   console.log("Difference in days:", daysDifference);
//   return daysDifference;
// }

// var result = CountDays(userInput);
