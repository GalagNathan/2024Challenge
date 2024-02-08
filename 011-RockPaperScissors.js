// https://www.codewars.com/kata/5672a98bdbdd995fad00000f

// const rps = (p1, p2) => {
//   if (p1 === p2) return "Draw!";
//   else if (
//     (p1 === "scissors" && p2 === "paper") ||
//     (p1 === "paper" && p2 === "rock") ||
//     (p1 === "rock" && p2 === "scissors")
//   )
//     return "Player 1 won!";
//   else return "Player 2 won!";
// };

const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  var rules = { rock: "scissors", paper: "rock", scissors: "paper" };
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
};

console.log(rps("rock", "paper"));
