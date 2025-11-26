//  Without Callback
// function double(arr){
//     let result=[]
//     for(let i=0; i<arr.length; i++){
//         result.push(arr[i]*2)
//     }
//     return result
// }
// console.log(double([1,2,34,]))

// With CallBack Function
function mymap(arr,callback){
    let result=[]
    for(let i=0; i<arr.length; i++){
        result.push(callback(arr[i]))
    }
    return result
}
console.log(mymap([1,2,34,],n=>n*2))
console.log(mymap([1,2,34,],n=>n-2))
console.log(mymap([1,2,34,],n=>n*3))
console.log(mymap([1,2,34,],n=>n*n))
