// https://www.codewars.com/kata/537400e773076324ab000262

const groupAnagrams = (words) => {
  let anagrams = {};
  for (let word of words) {
    let sortedWord = word.split("").sort().join("");
    if (!anagrams[sortedWord]) {
      anagrams[sortedWord] = [word];
    } else {
      anagrams[sortedWord].push(word);
    }
  }
  console.log(anagrams);
  return Object.values(anagrams);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
