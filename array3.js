function mergeArray(arr1, arr2) {
  return [
    ...new Set([...new Set(arr1), ...new Set(arr2)].sort((a, b) => a - b)),
  ];
}

function mergeArray2(arr1, arr2) {
  let count1 = 0
  let count2 = 0
  let mergedArray = []
  while(arr1[count1] || arr2[count2]){
    if (arr1[count1] < arr2[count2]) {
      mergedArray.push(arr1[count1]);
      count1++;
    } else {
      mergedArray.push(arr2[count2]);
      count2++;
    }
  }

  return mergedArray
}

// console.log(mergeArray([4, 5, 10, 15, 10, 4, 1], [1, 2, 1, 2, 6, 12]));
console.log(mergeArray2([0,3,4], [4,6,30]));
