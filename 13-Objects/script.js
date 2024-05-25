// Object Literals

let val;
let person = {
  firstName: "Abbas",
  "lastName": "Memmedov",
  age: 30,
  hobbies: ["music", "game"],

  address: {
    city: "Sumgait",
    country: "Azerbaijan",
  },

  birthYear: function () {
    return 2023 - this.age;
  },
};

// val = person.hobbies;

// for (let i = 0; i < val.length; i++) {
//   console.log(person.hobbies[i])
// }

// val = person;
// val = person.firstName;
// val = person.lastName;
// val = person["lastName"];
// val = person['firstName'];
// val = person.age;
// val = person.hobbies;
// val = person.hobbies[1];
// val = person.hobbies.length;
// val = person.address;
// val = person.address.city;
// val = person.address['city'];
// val = person.birthYear();
// console.log(val);

// person.hobbies[1]   //// obyekt icinden array  cagirmaq
// ////PART 2
// people[1].fistName  //// array icinden obyekt cagirmaq

// let val;
let people = [
  { firstName: "Malik", lastName: "Turan" },
  { firstName: "Niyazi", lastName: "Tural" },
  { firstName: "Kenan", lastName: "Turab" },
];

// val = people[0];
// val = people[1].firstName;
// val = people[2].lastName;

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i].firstName);
// }
