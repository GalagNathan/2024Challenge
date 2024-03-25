// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/train/javascript

// const quarterOf = (month) => {
//   let q = 1;
//   let m = month;
//   while (m >= 4) {
//     m = m - 3;
//     q++;
//   }
//   return q;
// };

const quarterOf = (m) => Math.ceil(m / 3);

console.log(quarterOf(1));
