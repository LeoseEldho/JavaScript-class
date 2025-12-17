let arr = [0, 1, 0, 3, 12];
function moveZero(arr) {
  let count = 0
  let result = []
  for (let i = 0; i < arr.length; i++){
    if (arr[i] !== 0) {
      result[result.length]=arr[i]
    } else {
      count++
    }
  }
      for (let f = 0; f < count; f++){
      result[result.length]=0
    }
  return result
}
console.log(moveZero(arr))