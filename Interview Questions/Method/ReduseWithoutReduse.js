let number=[1,2,3,4,5]
let sum=myReduse(number,function(acc,current){
    return acc+current
},0)
console.log(sum)

function myReduse(arr,callback,init){
    let accumulator=init
    for(let i=0; i<arr.length; i++){
        init=callback(init,arr[i])
    }
    return init
}