
let arr = [8,20,-2,4,-6];
function sortArr(arr) {
  for (let i = 1; i < arr.length; i++){
    let inset = arr[i];
    let j=i-1
    while (j >= 0 && arr[j] > inset) {
      arr[j+1]=arr[j]
      j=j-1
    }
    arr[j+1]=inset
  }
  return arr
}
console.log(sortArr(arr))