
// Məlumatı Saxlamaq: localStorage.setItem(key, value) funksiyasını istifadə edərək məlumatı localStorage-ə yerləşdirə bilərsiniz. Burada key bir ad, value isə yerləşdiriləcək məlumatdır. İkiləri də string formatında olmalıdır.

// Məlumatı Çağırmaq: localStorage.getItem(key) funksiyası ilə, verilənləri əldə edə bilərsiniz.

// Məlumatı Silmək: localStorage.removeItem(key) funksiyası vasitəsilə, belirli bir məlumatı silə bilərsiniz.

// Bütün Məlumatı Təmizləmək: localStorage.clear() funksiyası vasitəsilə, bütün yerli məlumatları silə bilərsiniz.

// JSON.stringify() funksiyası JavaScript-də obyekt və ya massiv kimi kompleks məlumatları JSON formatına sıralamaq üçün istifadə olunur. Bu funksiya, JavaScript-dəki obyektləri string formatına çevirir, ki bu da daha sonra məlumatı yerdəşdirərkən və ya göndərərkən daha asanlaşdırır.
// JSON.parse() funksiyası ilə bu stringi JavaScript obyektinə çeviririk. Nəticədə, obyektin məlumatlarına normal JavaScript obyekti kimi daxil edə bilərik.


////////////////////////////// 1
// const result = [1, 2, 3, 4]; //"[1, 2, 3, 4]"
// localStorage.setItem("result", JSON.stringify(result));
// const data = localStorage.getItem("result");
// const convertData = JSON.parse(data);
// console.log(convertData)

////////////////////////////// 2

// const students = {
//   //obyekti JSON.stringify-siz `` icinde yazmaq olar
//   name: "Test",
//   age: 22,
// };
// localStorage.setItem("student", JSON.stringify(students));
// const studentData = JSON.parse(localStorage.getItem("student"));
// console.log(studentData);

// LocalStorage-ni Temizlemek
// localStorage.removeItem("student");
// localStorage.clear();

/////////////////////////////////////

// let cars = {
//     brand:"BMW",
//     year : 2023,
//     colors:["black" , "red" , 'white'],
//     model:{x5:2010 , x6:2015 , gallery:"Avto888"},
//     stock:true
// }
// localStorage.setItem('carsMemory', JSON.stringify(cars))

// let data = JSON.parse(localStorage.getItem("carsMemory"))
// console.log(data)
// console.log(data.model.gallery) // burda cars yazmaq lazim deyil
// console.log(data.colors[0])
// console.log(data.year)

/////////////////////////////////////

let cars2 = {
  brand: "Mercedes",
  year: 2021,
  colors: ["green", "gray", "blue"],
  model: { e240: 1998, e220: 2012, gallery: "Avto777" },
  stock: true,
};

// function saveLocal(key, value) {
//   localStorage.setItem(key, JSON.stringify(value));
// }
// saveLocal("cars2", cars2);

// function getLocal(key) {
//   return JSON.parse(localStorage.getItem(key));
// }

// const data = getLocal("cars2")
// console.log(data)
// console.log(data.colors[1]);

// console.log(data.model.gallery);

const saveLocal = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getLocal = (key) => JSON.parse(localStorage.getItem(key));

if (getLocal("carsArray") === null) { //getLocal olunan melumat null-dursa yani melumat yoxdursa saveLocal islesin
  saveLocal("carsArray", cars2);
}

data2 = getLocal("carsArray")
console.log(data2.colors[1]);
console.log(data2.model.gallery);