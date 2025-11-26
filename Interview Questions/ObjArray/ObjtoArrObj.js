const obj ={id:1, name:'john', age:22}
// output = [{key:'id',value:1},{key:'name',value:'john'},{key:'age',value:22}]
function ObjArr(obj){
    let result=[]
    let i=0
    for(let x in obj){
        result[i]={}
        result[i]['key']=x
        result[i]['value']=obj[x]
        i++
    }
    return result
}
console.log(ObjArr(obj))