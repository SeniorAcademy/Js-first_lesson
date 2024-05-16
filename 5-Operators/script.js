// Operatörler

let val;
let a = 10;
let b = 5;
let c = 5;
let d = 3;

// 1- Aritmetik Operatorler
val = a+b;
val = a-b;
val = a*b;
val = a/b;
val = a%b;
val = d++;
// consola atir sonra artirir
val = ++d;
// artirir sonra consola atir
val = --d;
val = d--;
// console.log(val);



 // 2-  Assignment Operators
val = a;
val +=a; // val = val + a;
val -=a; // val = val - a;
val *=a; // val = val * a;
val /=a; // val = val / a;
val %=a; // val = val % a;
// console.log(val);



// 3- Comparison Operatörleri
val = a==b; 
val = b==c;
val = b===c; 
val = 5 == '5';// değer
val = 5 === '5';// değer & type
val = a!=b;
val = a!==b;
val = a > b;
val = b < a;
val = a >= b;
val = 5 >= 5;
val = a <= b;
// console.log(val);



// 4- Logical Operators
   // && (And)
   // true  && true  => true
   // true  && false => false
   // false && false => false
   
   // || (Or)
   // true  && true  => true
   // true  && false => true
   // false && false => false

   val =  (a>b) && (a>c) 
   val =  (a>b) || (a<c)


   // ! (Not)
   val = !(a>b)
   // !true  => false
   // !false => true
  //  console.log(val);