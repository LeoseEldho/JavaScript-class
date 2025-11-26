let obj={a:{b:{c:5}}}
// output:[['a,b,c',5]]
function ObjArry(obj, parentkey='' ,result=[]){
    
    for(let key in obj){

        const fullkey=parentkey?`${parentkey}.${key}`:`${key}`
        if(typeof obj[key]=='object'){
            ObjArry(obj[key],fullkey,result)
        }else{
            result[result.length]=[fullkey,obj[key]]
        }
    }
    return result
}
console.log(ObjArry(obj))