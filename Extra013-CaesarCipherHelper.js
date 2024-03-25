// https://www.codewars.com/kata/526d42b6526963598d0004db

class CaesarCipher {
  constructor(shift) {
    this.shift = shift;
    this.alphabet = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
  }

  encode(str) {
    this.encodedStr = str
      .toUpperCase()
      .split("")
      .map((e) => {
        if (this.alphabet.includes(e)) {
          this.newPos = this.alphabet.indexOf(e) + this.shift;
          if (this.newPos > 25) this.newPos -= 26;
          return this.alphabet[this.newPos];
        } else return e;
      });
    return this.encodedStr.join("");
  }

  decode(str) {
    this.decodedStr = str
      .toUpperCase()
      .split("")
      .map((e) => {
        if (this.alphabet.includes(e)) {
          this.newPos = this.alphabet.indexOf(e) - this.shift;
          if (this.newPos < 1) this.newPos += 26;
          return this.alphabet[this.newPos];
        } else return e;
      });
    return this.decodedStr.join("");
  }
}

const shift3 = new CaesarCipher(13);

console.log(shift3.encode("NNNNNNNNNNNN"));
console.log(shift3.decode("CNPNXRF"));

console.log(shift3.alphabet.indexOf("N"));
