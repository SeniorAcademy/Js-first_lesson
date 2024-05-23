// if/else statements

const firstName='Rasim';
const age = 23;
const isStudent = false;
const school = 'university';


              /////////////////////////////////////////////////////////////

// var x = 3;
// var y = 5;

// if(x < y) {
//     console.log('x  y-den kicikdir')
// }
// else{
//     console.log('x  y-den boyukdur')
// }


              /////////////////////////////////////////////////////////////


// if(firstName === 'Rasim'){
//     console.log('Salam Rasim');
// }

// if (age === 23){
//     console.log('yas 23');
// }

// if (isStudent){
//     console.log('Salam Telebe');
// }
// else{
//     console.log('Netersen');
// }


//               /////////////////////////////////////////////////////////////

            //   1 ci ancaq schoolu yoxla sonra ikisinide yoxla
// if (age >= 18){

//         // (school == 'university')

//     if ((school == 'university') || (school == 'high school')){
//         console.log('Prava ala bilersen');

//     } else{
//         console.log('Tehsil kifayetsiz');
//     }

// }



              /////////////////////////////////////////////////////////////


// if (age > 0  && age < 12 ){
//     console.log(`${firstName} is a child`);
// }else if (age >= 13 && age <= 19){
//     console.log(`${firstName} is a teenager`);
// }else{
//     console.log(`${firstName} is an adult`);
// }


              /////////////////////////////////////////////////////////////


// var result = prompt("who's there ? ");

// if(result == 'cancel'){
//     console.log('cancelled');


// }
// else if(result == 'Admin'){

//     var password = prompt('Enter your password : ');

//     if(password =='cancel'){
//         console.log('cancelled');

//     }else if(password == '1234'){
//         console.log('welcome Admin');

//     }else{
//         console.log('wrong password');
//     }

// }else{
//     console.log('I dont know you');
// }



              /////////////////////////////////////////////////////////////


// var saat = new Date().getHours();

// if( (6 < saat) && (saat < 12)){ 
     
//     console.log('Good Morning.. ');

// }

// else if ((saat >= 12) && (saat < 18)){

//     console.log('Good AfterNoon.. ');

// }

// else if ((saat >= 18) && (saat < 23)){

//     console.log('Good Evening.. ');

// }

// else{
//     console.log('Good Night.. ');
// }





// alert("Oyuna xos geldiz!!!");

// var start = confirm("Oyun baslasinmi?");

// var points = 0;

// if (start) {
//   var q1 = prompt("Goy uzunun rengi?");

//   if (q1 === "mavi" || q1 === "goy") {
//     points += 10;

//     alert(`Tebrikler ${points} xal qazandiniz!`);

//     var q2 = prompt("Ucbucagin bucaqlarinin cemi nece derecedir?");

//     if (q2 == 180) {
//       points += 10;
//       alert(`Tebrikler ${points} xal qazandiniz!`);
//     } else {
//       alert(`Tessuff ki 2ci sualdaca yandiz!.Xal:${points}`);
//     }
//   } else {
//     alert("Tessuff ki ilk sualdaca yandiz!");
//   }
// } else {
//   alert("Yene sizi gozleyirik!!!");
// }




// alert("Bazara xos gelibsiz!");

// var productName = prompt("Sizin mehsul adiniz?");
// var productPrice = Number(prompt(`Bu ${productName} mehsulun qiymeti?`));
// var productCount = Number(
//   prompt(`Bu ${productName} mehsuldan nece eded aldizki?`)
// );

// var serviceFeedback = confirm("Xidmetden razi qaldinizmi?");

// // const price = Number(productPrice);
// // const count = parseInt(productCount);
// // const price = +productPrice;
// // const price = Number(productPrice);

// var total = productPrice * productCount;

// alert(`Siz bu ${productName} mehsula xerciviz ${total} qeder xerciniz cixdi`);

// if (serviceFeedback === true) {
//   console.log("Cox sagolun bizi secdiyiviz!");
// } else {
//   console.log("Xosva gelmir get basqa yerden al!!!");
// }
// console.log(total);

// // console.log("productPrice:", price);
// // console.log("productCount:", count);