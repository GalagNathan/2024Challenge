// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

// const arrayPlusArray = (arr1, arr2) =>
//   [...arr1, ...arr2].reduce((acc, cur) => acc + cur);

const arrayPlusArray = (...arrays) =>
  [].concat(...arrays).reduce((a, b) => a + b, 0);

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
