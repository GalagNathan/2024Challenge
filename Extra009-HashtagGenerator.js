// https://www.codewars.com/kata/52449b062fb80683ec000024

const generateHashtag = (str) => {
  strArr = str
    .toLowerCase()
    .split(" ")
    .filter((val) => val)
    .map((el) => el[0].toUpperCase() + el.slice(1))
    .join("");
  if (!strArr || strArr.length >= 140) return false;
  return `#${strArr}`;
};

console.log(generateHashtag(""));
