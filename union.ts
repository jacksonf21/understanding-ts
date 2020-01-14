// function combine(input1: number | string, input2: number | string) {
//   let result;
//   if (typeof input1 === 'number' && typeof input2 === 'number') {
//     result = input1 + input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   return result;
// };

// const combinedAges = combine(30, 25);
// console.log(combinedAges);

// const combinedNames = combine('Max', 'Anna');
// console.log(combinedNames);

type Combinable = number | string;
type Specific = 'as-text' | 'as-number';

const combineAttributes = (arr1: (Combinable)[]) => {
  // let result: string | number;
  return sumArr(arr1);
};


// const isNumber = (arr) => arr.every(attribute => typeof(attribute) === 'number');
const sumArr = (arr) => arr.reduce((a, b) => a + b);

const info = [1, 2, 3];
const info2 = ['a', 'b', 'c'];
const info3 = [1, 'a', 'b'];

console.log(combineAttributes(info));
console.log(combineAttributes(info2));
console.log(combineAttributes(info3));