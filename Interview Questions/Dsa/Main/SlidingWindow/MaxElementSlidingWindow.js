
function FindMAX(arr, k) {
    let start = 0
    let window = []
    let result = []
    
    for (let i = 0; i < arr.length; i++){
        window[window.length] = arr[i]
        let max=0
        if (i >= k - 1) {
            for (let j = 0; j < window.length; j++) {
                if (window[j] > max) {
                    max=window[j]
                }
            }
             result.push(max);
                max=0
            window.shift()
            start++
        }
    }
    return result
}
console.log(FindMAX([1,3,-1,-3,5,3,6,7], 3));