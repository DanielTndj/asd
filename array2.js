let string = "danie awefwef";

function reverseString(str) {
  if (!str || str.length < 2 || typeof str !== "string") return;
  let reversedString = "";
  for (let a = str.length - 1; a >= 0; a--) {
    reversedString += str[a];
  }

  return reversedString;
}

//another way
//[...str] = str.split('')
const reverseString2 = (str) => [...str].reverse().join("");
console.log(reverseString("a"));
