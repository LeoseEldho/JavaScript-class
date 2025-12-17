let arr = [1, 3, 2, 2, 2, 3,4,4,4,4,4,4];
function nonRepeat(arr) {
  let max = 0
  let repe=0
  let obj={}
  for (let i = 0; i < arr.length; i++){
    obj[arr[i]]=(obj[arr[i]]||0)+1
  }
  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key]
      repe = key
    }
  }
  console.log(obj)
  return repe
}
console.log(nonRepeat(arr))