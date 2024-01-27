// const countBits = (n) => {
//   let ones = 0;
//   biNumber = n
//     .toString(2)
//     .split("")
//     .forEach((el) => (el === "1" ? ones++ : ones));
//   return ones;
// };

//////////////////////////

// const countBits = (n) => n.toString(2).split("0").join("").length;

const countBits = (n) => n.toString(2).replaceAll(0, "").length;

console.log(countBits(1234));
