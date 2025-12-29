let input = [0, 1, 0, 3, 12];
function moveZero(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] !== 0) {
            let temp = arr[i];
            arr[i] = arr[count]
            arr[count] = temp
            console.log(count)
            count++
        }
    }
    return arr
}
console.log(moveZero(input))