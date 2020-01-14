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
var combineAttributes = function (arr1) {
    // let result: string | number;
    return sumArr(arr1);
};
// const isNumber = (arr) => arr.every(attribute => typeof(attribute) === 'number');
var sumArr = function (arr) { return arr.reduce(function (a, b) { return a + b; }); };
var info = [1, 2, 3];
var info2 = ['a', 'b', 'c'];
var info3 = [1, 'a', 'b'];
console.log(combineAttributes(info));
console.log(combineAttributes(info2));
console.log(combineAttributes(info3));
