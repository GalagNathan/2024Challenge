// https://www.codewars.com/kata/56f69d9f9400f508fb000ba7/train/javascript

const monkeyCount = (n) =>
  Array(n)
    .fill(0)
    .map((_, i) => i + 1);

console.log(monkeyCount(5));
