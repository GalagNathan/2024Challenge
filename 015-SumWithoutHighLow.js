// https://www.codewars.com/kata/576b93db1129fcf2200001e6

// const sumArray = function (array) {
//   if (!array || array.length <= 2) return 0;
//   else {
//     const sortArr = array.sort((a, b) => a - b).slice(1, -1);
//     // sortArr.shift();
//     // sortArr.pop();
//     return sortArr.reduce((acc, cur) => acc + cur, 0);
//   }
// };

sumArray = (a) =>
  a
    ? a
        .sort((x, y) => x - y)
        .slice(1, -1)
        .reduce((s, e) => s + e, 0)
    : 0;

console.log(sumArray([-6, -20, -1, -10, -12]));
