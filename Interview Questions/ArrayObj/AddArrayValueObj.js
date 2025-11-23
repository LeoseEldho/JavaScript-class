let arr=[['a',10],['b',25],['c',5],['a',40],['c',50]]
function arrObjAdd(arr){
    let result={}
    for(let i=0; i<arr.length; i++){
        if(result[arr[i][0]]==undefined){
            result[arr[i][0]]=0
        }
        result[arr[i][0]]+=arr[i][1]
    }
    return result
}
console.log(arrObjAdd(arr))