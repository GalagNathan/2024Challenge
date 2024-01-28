// https://www.codewars.com/kata/5412509bd436bd33920011bc

// const maskify = function (cc) {
//   return cc.slice(0, -4).replaceAll(/./g, "#") + cc.slice(-4);
// };

function maskify(cc) {
  return cc.slice(-4).padStart(cc.length, "#");
}

console.log(maskify("21234325252532"));
