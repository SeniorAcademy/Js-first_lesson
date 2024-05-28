// Functions

// function fullName(ad , soyAd){
//   console.log('Welcome..' + ad + " " + soyAd)
//   }

//   fullName('Niyazi' , 'Eliyev');

// function fullName(ad , soyAd){
//     return ad + " " + soyAd;
//   }

// // console.log(name('Niyazi' , 'Eliyev'))

// var id = fullName('Eli' , 'Eliyev')
// console.log(id)

// ///////////////////////////////////////////////////////////////

// function tonHesabla(kilo) {
//     var a = kilo  / 1000;
//     return a;
// }
// var b =  tonHesabla(2500);
// console.log(b)

// ///////////////////////////////////////////////////////////////

// function yasHesapla(dogumIli) {
//   return 2023 - dogumIli;
// }

// let ageAbbas = yasHesapla(1990);
// let ageRasim = yasHesapla(1995);
// let ageEmin = yasHesapla(2000);

// console.log(ageAbbas);
// console.log(ageRasim);
// console.log(ageEmin);

// // TASK
// function EmekligeKacYilKaldi(dogumYili,isim){

//     let yas = yasHesapla(dogumYili);
//     let emeklilik = 65 - yas;

//     if(emeklilik > 0){
//         // > 0
//         console.log(`${isim} emekli olmana ${emeklilik} yıl kaldı`);
//     }
//     else{
//         console.log('Zaten emekli oldunuz');
//     }
// }

// EmekligeKacYilKaldi(1955,'Ada');
// EmekligeKacYilKaldi(2010,'Yiğit');
// EmekligeKacYilKaldi(1990,'Çınar');

function CalculateAge(birthYear) {
  let currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}

function Pension(birthYear, name) {
  let age = CalculateAge(birthYear);
  let retirement = 65 - age;

  if (retirement > 0) {
      console.log(`${name} is ${retirement} years away from retirement`);
  } else {
      console.log(`${name}, you have already retired`);
  }
}

Pension(1955, 'Jack');
Pension(2010, 'John');
Pension(1990, 'Rick');

 
///////////////////////////////////////////////////////////////

// Function Declarations

// function sum(a,b){
//     var c = a+b;
//     return c;
// }

// console.log(sum(10,20));

// Function Expressions

// const sum = function(a,b){
//     var c = a+b;
//     return c;
// }

// const sum = function(a,b){

//     if(typeof a === 'undefined'){ a=0; }
//     if(typeof b === 'undefined'){ b=0; }

//     var c = a+b;
//     return c;
// }

// ES6 Default Parameters
// const sum = function(a=0,b=0){
//     var c = a+b;
//     return c;
// }

// function sumAll(){
//     var total = 0;
//     for(let i =0; i < arguments.length; i++){
//          total+=arguments[i];
//     }
//     return total;
// }

//console.log(sum(10,30));
// console.log(sum(10)); // NaN
// console.log(sum(10,30,40,50));
// console.log(sumAll(10,20,30,40,50));

function MyOther() {
  function Sum() {
    const num = A;

    // return 4 + num; //NAN
    return 4 + num(); //9
  }

  function A() {
    return 5;
  }

  // return Sum;
  return Sum();
}

const myResult = MyOther;

const mySum = myResult();

// console.log(mySum());
console.log(mySum);

function makeUpperCase(str) {
  // Code here
  var newStr = str.toUpperCase();

  return newStr;
}

console.log(makeUpperCase("hello"));
console.log(makeUpperCase("Hello"));
console.log(makeUpperCase("HELLO"));
console.log(makeUpperCase(""));

// className={[styles.test1,styles.test2]}

// className={`${styles.test1} col-5`}

//? Solition2

var fullname = "   Me lik mem me d ";

function trimWord(str) {} //* Melikmemmed
