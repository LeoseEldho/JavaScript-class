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