// https://www.codewars.com/kata/57eaeb9578748ff92a000009

const sumMix = (x) => x.reduce((acc, cur) => acc + Number(cur), 0);

console.log(sumMix(["9", 3, "7", "3"]));
