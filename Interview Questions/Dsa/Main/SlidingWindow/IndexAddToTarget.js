
function findTarget(arr, t) {
    let start = 0;
    let windowSum = 0;

    for (let i = 0; i < arr.length; i++) {
        windowSum += arr[i];
        while (windowSum > t ) {
            windowSum -= arr[start];
            start++;
        }
        if (windowSum === t) {
            let result = [];
            for (let j = start; j <= i; j++) {
                result[result.length] = arr[j];
            }
            return result;
        }
    }
    return false;
}

console.log(findTarget([2, 1, 5, 2, 3, 2], 8));