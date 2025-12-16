
function sum3(nums, k) {
  let obj = {}
  for (let i = 0; i < nums.length; i++){
    let need = k - nums[i];
  
    if (obj.hasOwnProperty(need)) {
      return[obj[need], i]
    } else {
      obj[nums[i]] = i
      // console.log(obj,'I')
    }
  }
  return "no sum"
}
console.log(sum3([3, 2, 3, 4], 6));