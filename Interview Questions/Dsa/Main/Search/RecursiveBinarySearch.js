
function binarySearch(arr, t) {
  return search(arr, t, 0, arr.length - 1);
}
function search(arr, t, left, right) {
  if (left > right) {
    return -1
  }
  let midd = Math.floor((left + right) / 2);
  if (t == arr[midd]) {
    return midd;
  }
  if (t < arr[midd]) {
   return  search(arr, t, left, midd-1)
  } else {
   return search(arr, t, left+1, right)
  }
}
console.log(binarySearch([-5, 2, 4, 6, 10], 10)); 
console.log(binarySearch([-5, 2, 4, 6, 10], 6));
console.log(binarySearch([-5, 2, 4, 6, 10], 20));