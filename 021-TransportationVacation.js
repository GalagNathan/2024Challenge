// https://www.codewars.com/kata/568d0dd208ee69389d000016/train/javascript

const rentalCarCost = (d) =>
  d < 3 ? d * 40 : d < 7 ? d * 40 - 20 : d * 40 - 50;

// const rentalCarCost = d => d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0));

console.log(rentalCarCost(4));
