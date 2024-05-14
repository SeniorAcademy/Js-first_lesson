// Ders 3: Değişken Tipleri

// Primitive Types

// String
let firstName = 'Huseyn';
console.log(typeof firstName) // string

// Number
let age = 20; 
console.log(typeof age)  // number

console.log(firstName + age)

let money = 100.5;
console.log(typeof money)  // number

// Boolean
let isActive = false;
console.log(isActive) // boolean

// null
let job = null
console.log(job) // object

// undefined
let car;
console.log(typeof car) // undefined



// Reference Types: Objects

// Array
let names = ['Ali','Ahmet','Can']
console.log(names[0]) // object

// Object Literals

let address= {
   city: 'Baku',
   country: 'Azerbaijan',
   region: 'Khatai'
}
console.log(address.city) // object


const reqem = 100;  // var ele yoxla
// reqem = 200;
console.log(reqem)

// Functions

var calculate = function(){
   return 0;
}

console.log(typeof calculate) // function



