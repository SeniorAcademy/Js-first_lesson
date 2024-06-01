///////////////// SORT

var say = [17, 92, 26, 12, 44, 77, 180, 150, 16];
// let names = ["Icardi", "Muslera", "Alex", "Benzema", "Hagi"];

// names.sort();
// console.log(names);

// say.sort();
// console.log(say);

// say.sort(function (num1, num2) {
//   return num1 - num2;
// });
// console.log(say);

// say.sort((num1, num2) => num1 - num2);
// console.log(say);

////////////////// PART 2
const basket = [
  {
    model: "Samsung A71",
    price: 1700,
  },
  {
    model: "Beko 55",
    price: 1500,
  },
  {
    model: "Apple 13",
    price: 2000,
  },
];

/////////////////////////////////SORT PRICE
//Arrow
// basket.sort((a, b) => {
//   return a.price - b.price;
// });
// console.log(basket);

// function compare(a, b) {
//   return a.price - b.price;
// }
// console.log(basket.sort(compare));

// const sortedPrice = basket.sort((a, b) => (a.price > b.price ? 1 : -1));
// console.log(sortedPrice);

// const sortedPrice2 = basket.sort(compare2);
// function compare2(a, b) {
//   if (a.price > b.price) {
//     return 1;
//   } else {
//     return -1;
//   }
// }
// console.log(sortedPrice2);

///////////////////////////////////////// SORT MODEL
//1
// let bskt = basket.sort((a, b) => a.model.localeCompare(b.model));
// console.log(bskt);

// //2
function compareModels(a, b) {
  return a.model.localeCompare(b.model);
}
let bskt2 = basket.sort(compareModels);
console.log(bskt2);

// ///3
// const sortedModels2 = basket.sort(compare2);
// function compare2(a, b) {
//   if (a.model > b.model) {
//     return 1;
//   } else {
//     return -1;
//   }
// }
// console.log(sortedModels2);

// const sortedModels3 = basket.sort((a, b) => (a.model > b.model ? 1 : -1));
// console.log(sortedModels3);

////////////////////////////////////// Find &  Filter

// function over(num) {
//   return num >= 20;
// }
// let value = say.find(over); // ancaq 1in tapacaq
// console.log(value);

// // // filter
// let value2 = say.filter(over);
// console.log(value2);

// ////////////////////////////////////////////////////////////////////////////////

// /////////////////////////////  Every

// function over(num) {
//   return num >= 20;
//   // 20 den kicik bir element varsa FALSE olacaq
//   // Hamisi 20-den boyuk olmalidi
//   // Elementler hamisi 20 den boyukdurse TRUE olacaq
// }
// var val = say.every(over);
// console.log(val);

// // // /////////////////////////////  Some

// function over(num) {
//   return num >= 20;
//   // 20 den kicik bir element varsa TRUE olacaq  Biri boyuk olsa kifayet Edir
//   //  hec biri boyuk olmasa FALSE
// }
// var val2 = say.some(over);
// console.log(val2);

// //Task
let years = [2017, 1970, 1990, 1998, 2012];
function over18(year) {
  let age = 2023 - year;
  return age >= 18;
}
let values = years.filter(over18);
console.log(values);

// const over18 = year => {
//   let age = 2023 - year;
//   return age >= 18;
// };

// let values = years.filter(over18);
// console.log(values);


