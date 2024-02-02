// https://www.codewars.com/kata/5513795bd3fafb56c200049e

// const countBy = (x, n) => {
//   let z = [];
//   for(let i = 1; i <= n; i++){
//     z.push(x * i)
//   }
//   return z;
// };

// const countBy = (x, n) =>
//   Array(n)
//     .fill(0)
//     .map((_, i) => x * (i + 1));

const countBy = (x, n) => [...Array(n)].map((_, idx) => ++idx * x);

console.log(countBy(1, 10));
