const numbers = [1, 2, 3];

function myForEach(array, callback) {
    let result = [];
  for (let i = 0; i < array.length; i++) {
    result[i] = callback(array[i], i, array);
  }
  return result;
}

let output = myForEach(numbers, (num) => num * 2);
console.log(output);