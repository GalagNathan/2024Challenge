// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

let i = 0;
const persistence = (num) => {
  if (num < 10) return i;
  i += 1;
  return persistence(
    num
      .toString()
      .split("")
      .reduce((acc, cur) => acc * cur)
  );
};

console.log(persistence(8150898));
