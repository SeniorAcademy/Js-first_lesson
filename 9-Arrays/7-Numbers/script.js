// Numbers

var x = 10;
var y = '10';

var x = '10';
var y = '10';

console.log(x+y);


let val;

val = Number('10.5');
val = parseInt('10.5');
val = parseFloat('10.5');

val = parseInt('a10a');

val = isNaN('10'); // number  olmamagini yoxluyur //  false olacaq numberdi

val = isNaN('a10');
// number deyilse true olacaq
// NOT A NUMBER
console.log(val)

///////////////////////////////////////////



//  var num = 10.12456789;
//  val = num.toPrecision(6);
//  val = num.toFixed(2);
//  console.log(val)

////////////////////////////////////////////


// val = Math.round(2.4); 
// val = Math.round(2.7);
// val = Math.ceil(2.4);
// val = Math.ceil(2.6);
// val = Math.floor(2.4);
// val = Math.floor(2.7);
// val = Math.sqrt(49);
// val = Math.pow(2,3);
// val = Math.min(1,2,3,2,4,9);
// val = Math.max(4,5,6,4,9,7);
// val = Math.floor(Math.random()*100+1);
// console.log(val);





//Task
var salary = 1000;
var shiftSalary = 22.5;
var shiftHours = 16;  //elave saat

var totalSalary = salary + (shiftSalary*shiftHours);
console.log(totalSalary)

var resultSalary = totalSalary - totalSalary*0.18
console.log(Math.ceil(resultSalary.toFixed(2)));