const num = ['a', 'b', 'c', 'a'];
const num2 = ['x', 'm', 'a'];

function checkSimilarity(arr1, arr2) {
  let obj = {};
  for(let a=0; a<arr1.length; a++){
    if(!obj[arr1[a]]){
      obj[arr1[a]] = true;
    }
  }

  for (const i in arr2) {
    console.log(i)
    if(obj[arr2[i]]){
      return true
    }
  }

  return false
}

console.log(checkSimilarity(num, num2))
