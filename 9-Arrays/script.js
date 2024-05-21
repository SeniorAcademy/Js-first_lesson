// Arrays

let names = [
  "Icardi",
  "Muslera",
  "Alex",
  "Benzema",
  "Hagi",
  "Kerem",
  "Onana",
  "Kaka",
  "Mertens",
];
let years = [2017, 1970, 1990, 1998, 2012];
let mix = ["Ronaldo", "Messi", 1983, null, undefined, ["Cinema", "Book"]];

// Get array item
// console.log(names[0])
// console.log(names[1])
// console.log(names);
// console.log(names[names.length-1]);
// var newArray = years.at(-3);
// console.log(newArray)

// //  Add item
// // Arrey-in sonuna add edir
//  names[names.length] = 'Messi';
//  console.log(names);
//  //Push // sonuna add edir
//  names.push('Junior')
//  console.log(names);
//  //Unshift // evveline add edir
//  names.unshift('Lewandovski')
//  console.log(names);

// Remove item
// console.log(years);
// years.pop(); // sondan gotutrur
// years.shift(); // evvelden gotutrur
// console.log(years);

//indexof
// let index = names.indexOf('Alex');
// console.log('index number: ' + index);

// reverse
// names.reverse();
// console.log(names);

//CONCAT
//  let value = years.concat(names);
//  console.log(value);

// splice
// console.log(names);
// // // var newArray  = names.splice(1,5); // 1 den sonra 5 e qeder goturecek
// var newArray = names.splice(3); // 3 den sonra hamisini goturecek
// // // var newArray = names.splice(1, 0, "Lemon", "Kiwi");
// console.log(newArray);
// console.log(names);

// splice goturduyu arraydan elemnti birdefelik alir kohnede hemin elemetler qalmir
// slice ise sadece copy edir kohnedeki elemrnti birdefelik almir

//  slice  goturduyun gosterir ona gore ayri deyisken lazimdi
//  console.log(names);
// var newArray = names.slice(3);
// // // var newArray = names.slice(2, 5); // 2 daxil olmaqla 2 den sonra 5-ci index-e qeder olani gotur
// console.log(newArray);
// console.log(names);

// Split
// let text = "How are you doing today?";
// const myArray = text.split(" ");
// console.log(myArray)

// // Join
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text2 = fruits.join(" ");
// // let text2 = fruits.join("-");
// console.log(text2)

// var a = 10;
// var b = a; // copy olan b-ye tesir etmir
// var c = a + 10;
// console.log(c);
// console.log(b);

// var array = [1, 2, 3, 4, 5];
// var copyArray = array;
// array.push(6);
// console.log("array", array);
// console.log("copyArray", copyArray);

// var array = [1, 2, 3, 4, 5];
// var copyArray = [...array];
// array.push(6);
// console.log("array", array);
// console.log("copyArray", copyArray);

// var num = 2012;
// var num = 3000;
// var hasEl = years.indexOf(num);

// if (hasEl !== -1) {
//   years.splice(hasEl, 1);
//   years.splice(hasEl, null, "smile");
// } else {
//   years.push(num);
// }
// console.log(years)

// StartsWith

// var question = prompt("Enter")

// function translate(str) {
//   let langs = [
//     ["english", "Welcome"],
//     ["czech", "Vitejte"],
//     ["danish", "Velkomst"],
//     ["dutch", "Welkom"],
//     ["estonian", "Tere tulemast"],
//     ["finnish", "Tervetuloa"],
//     ["flemish", "Welgekomen"],
//     ["french", "Bienvenue"],
//     ["german", "Willkommen"],
//     ["irish", "Failte"],
//     ["italian", "Benvenuto"],
//     ["latvian", "Gaidits"],
//     ["lithuanian", "Laukiamas"],
//     ["polish", "Witamy"],
//     ["spanish", "Bienvenido"],
//     ["swedish", "Valkommen"],
//     ["welsh", "Croeso"],
//   ];

//   for (let i = 0; i < langs.length; i++) {
//     if (langs[i][0].startsWith(str)) {
//       return langs[i][1];
//     }
//   }
// }

// console.log("result", translate(question));

// var newArray = years
//   .filter(function (item, index) {
//     return item !== 1990;
//   })
// console.log(newArray);




