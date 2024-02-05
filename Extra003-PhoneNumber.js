// https://www.codewars.com/kata/525f50e3b73515a6db000b83

const createPhoneNumber = (num) => {
  const number = num.join("");
  return `(${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(6)}`;
};

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
