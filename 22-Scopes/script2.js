//? Scope

//?Global
var a = 5;
let global;

function helper() {
  //?Function first

  var a = 3;

  var result = a + 6;

  global = 10;

  function B() {
    //?Function second


    // var a = 2;

    // var result = a + 9;
    // console.log(result);

    return result;
  }

  B();

  return result;
}

const result2 = helper();
console.log(result2);

function c() {
  return console.log("c", global);
}
c();
/////////////////////////////////////

// var d = 4;
// let d = 4;
// const d = 4;
// function test1() {
//   //   var d = 4;
//   //   let d = 4;
//   const d = 4;

//   function test5() {
//     var d = 3;
//     console.log("test5", d)
//     return d;
//   }

//   var resultTest5 = test5();

//   return d + resultTest5;
// }

// const result = test1();
// console.log(result);

// for (let i = 0; i < 5; i++)
// for (var i = 0; i < 5; i++) {
//   console.log(i);
// }

// console.log("kenarda", i);

// function twotop() {
//     function two(a) {
//       alert("Two: " + a);
//     }

//     two(a);

//     var a = 13;

//     return "something";
//   }

//   twotop();

function MyOther() {
  function Sum() {
    const num = A();

    // return 4 + num; //NAN
    return 4 + num; //9   num();
  }

  function A() {
    return 5;
  }

  //   return Sum;
  return Sum();
}

// const myResult = MyOther()
// console.log(myResult);

const myResult = MyOther
console.log(myResult());

// return Sum olsa bele olmalidir
// const myResult = MyOther();
// console.log(myResult());