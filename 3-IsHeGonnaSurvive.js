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
