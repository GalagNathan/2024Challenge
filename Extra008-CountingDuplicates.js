// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

const duplicateCount = (text) => {
  const textUnique = [...new Set(text.toLowerCase().split("").sort())];
  return textUnique
    .map((i) => text.toLowerCase().split(i).length - 1)
    .filter((i) => i !== 1).length;
};

console.log(duplicateCount("aabBcde"));
