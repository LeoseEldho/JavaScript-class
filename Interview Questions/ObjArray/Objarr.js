let obj={a:1,b:2,c:3}

function ObjArr(obj){
    let result=[]
    for(let v in obj){
        result[result.length]=obj[v]
    }
    return result
}
console.log(ObjArr(obj))
// ----------------------------------------
let obj1={a:1,b:2,c:3}
//[a=1,b=2,c=3]- output

function obj1Arr(obj1){
    let result=[]
    for(let key in obj1){
        result[result.length]=`${key}=${obj1[key]}`
    }
    return result
}
console.log(obj1Arr(obj1))