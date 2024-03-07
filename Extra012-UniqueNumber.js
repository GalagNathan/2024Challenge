// https://www.codewars.com/kata/585d7d5adb20cf33cb000235

const findUniq = (arr) => {
  const uniqArr = [...new Set(arr)].sort((a, b) => a - b);
  const sample = arr.slice(0, 3);
  const counter = {};
  sample.forEach((el) => (counter[el] = counter[el] ? counter[el] + 1 : 1));
  console.log(counter, uniqArr, Object.values(counter), Object.keys(counter));
  if (counter[uniqArr[0]] === 1 || !counter[uniqArr[0]]) {
    return uniqArr[0];
  } else {
    return uniqArr[1];
  }
};

// function findUniq(arr) {
//   arr.sort((a,b)=>a-b);
//   return arr[0]==arr[1]?arr.pop():arr[0]
// }

// function findUniq(arr) {
//   return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
// }

console.log(findUniq([3, 3, 3, 3, -3]));
