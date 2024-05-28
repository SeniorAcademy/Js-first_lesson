// Loops in Array & Objects

let cars = ['Bmw','Mercedes','Toyota','Opel'];

let people = [
   {firstName:'Vurgun',lastName:'Turan'},
   {firstName:'Togrul',lastName:'Tural'},
   {firstName:'Orxan',lastName:'Turab'}
];


/////////////////////////////////////////////////////////// FOR

// Arrays   
// for(let i = 0; i < cars.length; i++){
//     console.log(cars[i]);
// }


// Objects

for (let i = 0; i < people.length; i++){
    console.log(people[i].firstName); //[1]
}



/////////////////////////////////////////////////////////// FOR - IN

// Arrays
// for(let i in cars){
//      console.log(cars[i]);
// }

// // Objects
// for (let i in people){
//     console.log(people[i].firstName);
// }



/////////////////////////////////////////////////////////// FOR - OF

// Arrays

// for(let i of cars){
//     console.log(i);
// }

// // Objects

// for (let i of people){
//     console.log(i.firstName);
// }



// foreach
// cars.forEach(function(item){
//     console.log(item);
// });

// people.forEach(function(item){
//    console.log(item.firstName);
// });


// cars.forEach(car => console.log(car));

// people.forEach(person => console.log(person.firstName));


