const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const encrypt = (str, shift) => {
  const arr = str.toLowerCase().split("");
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    newStr += letters[letters.findIndex((el) => el === arr[i]) + shift];
  }

  return newStr;
};

console.log(encrypt("z", 1));

module.exports = encrypt;
