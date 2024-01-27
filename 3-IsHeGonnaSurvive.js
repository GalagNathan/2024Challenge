// 3/366
// https://www.codewars.com/kata/59ca8246d751df55cc00014c

// function hero(bullets, dragons) {
//   if (bullets / dragons >= 2) {
//     return true;
//   } else {
//     return false;
//   }
// }

const hero = (bullets, dragons) => (bullets / dragons >= 2 ? true : false);

console.log(hero(10, 5));
console.log(hero(7, 4));
console.log(hero(20, 5));
