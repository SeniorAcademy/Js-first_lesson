// const numbers = [2, 3, 4, 5];

// const product = numbers.reduce((accumulator, currentValue) => {
//   return accumulator * currentValue;
// }, 1);

// console.log(`Massivdəki rəqəmlərin hasiləsi: ${product}`);

const numbers = [3, 5, 2, 7, 8, 5, 3, 2, 9];

const result = numbers.reduce((accumulator, currentValue) => {
  if (!accumulator.includes(currentValue)) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);

console.log(`Massivdə təkrarlanan rəqəmlər: ${result}`);

// const numbers = [5, 8, 2, 4, 6];

// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);

// console.log(`Massivdəki rəqəmlərin cəmi: ${sum}`);

