const arr = [2, 5, 5, 2, 4, 2, 1];

function firstReccuringChar(arr) {
  let obj = {};
  for (let a = 0; a < arr.length; a++) {
    if (obj[arr[a]] !== undefined) {
      return arr[a];
    } else {
      obj[arr[a]] = a;
    }
  }

  return;
}

console.log(firstReccuringChar(arr));
