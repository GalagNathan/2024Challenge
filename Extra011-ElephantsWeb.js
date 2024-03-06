// https://www.codewars.com/kata/5830e55fa317216de000001b

function breakTheWeb(strength, width) {
  let totalElephants = 0;
  let totalElephantWeight = 0;
  let levelCounter = 1;
  let j = width;

  while (totalElephantWeight < strength && width > 0) {
    for (let i = 1; i <= j; i++) {
      totalElephantWeight += 1000 * levelCounter;
      if (totalElephantWeight <= strength) {
        totalElephants++;
      } else {
        return totalElephants;
      }
    }
    levelCounter++;
    j--;
    if (j === 0) {
      return totalElephants;
    }
  }
  return totalElephants;
}

console.log(breakTheWeb(532000, 5));
