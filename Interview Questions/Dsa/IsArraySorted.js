function isSorted(arr,order='asc') {
  for (let i = 0; i < arr.length; i++) {
    if (order=='asc'&&arr[i] > arr[i + 1]) {
      return false;
    }
    if (order == 'dis' && arr[i] < arr[i + 1]) {
      return false;
    }
  }
    return true
  }
console.log(isSorted([1, 2, 5, 4]))
console.log(isSorted([5,3,2,1],'dis'))
console.log(isSorted([1, 2, 3, 4]))
console.log(isSorted([2, 3, 4, 7,8]))