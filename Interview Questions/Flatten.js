function flatten(arr){
    let result=[]
    let k=0
    function flat(a){
        for(let i=0; i<a.length; i++){
            if(Array.isArray(a[i])){
                flat(a[i])
            }else{
                result[k++]=a[i]
            }
        }
    }
    flat(arr)
    return result
}
console.log(flatten([1, [2, [3, 4]], 5]));