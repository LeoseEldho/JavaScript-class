// let obj={name:'thor'}
// let obj=[1,2,3]
// let obj=''
let obj={}

function isObj(obj){
  if(Object.keys(obj).length==0){
    return false
  }else{
    return obj
  }
}
console.log(isObj(obj))