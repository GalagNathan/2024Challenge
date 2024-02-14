// https://www.codewars.com/kata/55cbd4ba903825f7970000f5

const getGrade = function (s1, s2, s3) {
  const average = (s1 + s2 + s3) / 3;
  return average >= 90 && average <= 100
    ? "A"
    : average >= 80
    ? "B"
    : average >= 70
    ? "C"
    : average >= 60
    ? "D"
    : "F";
};

console.log(getGrade(70, 70, 100));
