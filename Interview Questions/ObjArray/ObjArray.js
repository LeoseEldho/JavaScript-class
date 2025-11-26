let obj={a:1,b:2,c:3}


function ObjArr(obj){
    let result=[]
    for(let key in obj){
        result[result.length]=[key,obj[key]]
    }
    return result
}
console.log(ObjArr(obj))