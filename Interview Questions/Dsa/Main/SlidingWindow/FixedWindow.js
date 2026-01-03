function fixedWindow(arr, k) {
    let result = 0;
    let window = 0;
    let start = 0;
    for (let i = 0; i < arr.length; i++){
        window += arr[i];
        if (i >= k - 1) {
            result = Math.max(result, window);
            window -= arr[start];
            start++
        }
    }
return result
}
console.log(fixedWindow([1,2,3,4,7,16], 4))