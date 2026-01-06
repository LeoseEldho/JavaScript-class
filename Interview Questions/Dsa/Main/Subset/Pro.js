
function subsets(arr) {
    let result = [[]];
    for (let key of arr) {
        let size = result.length; 
        for (let i = 0; i < size; i++){
            let temp = [...result[i]];
            temp.push(key);
            result.push(temp)
        }
    }
    return result
}

console.log(subsets([1,2,3]));
