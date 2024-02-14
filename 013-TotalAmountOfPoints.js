// https://www.codewars.com/kata/5bb904724c47249b10000131

// const points = function (games) {
//   let total = 0;
//   games.forEach((el) => {
//     if (el[0] > el[2]) {
//       total += 3;
//     } else if (el[0] === el[2]) {
//       total += 1;
//     }
//   });
//   return total;
// };

const points = (games) =>
  games.reduce((output, current) => {
    return (output +=
      current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0);
  }, 0);

console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
);
