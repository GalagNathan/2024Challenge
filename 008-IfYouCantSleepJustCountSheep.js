// const countSheep = (num) => {
//   let murmur = "";
//   for (let i = 1; i <= num; i++) {
//     murmur = murmur + `${i} sheep...`;
//   }
//   return murmur;
// };

countSheep = (n) => [...Array(n).keys()].map((x) => `${x + 1} sheep...`).join``;

console.log(countSheep(2));
