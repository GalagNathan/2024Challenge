// https://www.codewars.com/kata/541c8630095125aba6000c00

// const digitalRoot = (n) => {
//   while (n.toString().length > 1) {
//     n = String(n)
//       .split("")
//       .reduce((acc, cur) => Number(acc) + Number(cur));
//   }
//   return n;
// };

function digitalRoot(n) {
  if (n < 10) return n;
  return digitalRoot(
    n
      .toString()
      .split("")
      .reduce(function (acc, d) {
        return acc + +d;
      }, 0)
  );
}

console.log(digitalRoot(3412312));
