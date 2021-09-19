const alphabet = ["a"];
const largeArr = new Array(1000).fill("a");
const findAlphabet = (arr) => {
  for (let a = 0; a < arr.length; a++) {
    // console.log(arr[a]);
    if (arr[a] === "a") {
      console.log("Alphabet found!");
    }
  }
};

findAlphabet(largeArr); // O(n) = O(1000) = Linear Time  
