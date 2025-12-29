
let input = [1, 2, 3, 4, 6]
function findSum(arr, t) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum == t) {
            return [left, right];
        } else if (sum > t) {
            right--
        } else {
            left++
        }
    }
    return false;
}
console.log(findSum(input, 8))


// function sum3(nums, k) {
//   let obj = {}
//   for (let i = 0; i < nums.length; i++){
//     let need = k - nums[i];
  
//     if (obj.hasOwnProperty(need)) {
//       return[obj[need], i]
//     } else {
//       obj[nums[i]] = i
//       // console.log(obj,'I')
//     }
//   }
//   return "no sum"
// }
// console.log(sum3([3, 2, 3, 4], 6));

function sumAdd(arr, target) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let needed = target - arr[i];

    if (obj[needed] !== undefined) {
      return [obj[needed], i];
    }

    obj[arr[i]] = i;
  }
}
