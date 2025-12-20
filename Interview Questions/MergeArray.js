function mergeSortedArrays(arr1, arr2) {
  let result = [];
  let i = 0;            
  let j = 0;           

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result[result.length]=arr1[i]
      i++;                  
    } else {
      result[result.length]=arr2[j]
      j++;                  
    }
  }
  while (i < arr1.length) {
    result[result.length]=arr1[i]
    i++;
  }
  while (j < arr2.length) {
    result[result.length]=arr2[j]
    j++;
  }
  return result;
}
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));









function mergeArr(arr1, arr2) {
  let result = [];
  function exists(arr, value) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) return true;
    }
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (!exists(result, arr1[i])) {
      result[result.length] = arr1[i];
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!exists(result, arr2[i])) {
      result[result.length] = arr2[i];
    }
  }
  
  return result;
}
console.log(mergeArr([1,2,4], [3,2,4,6,5,5]))