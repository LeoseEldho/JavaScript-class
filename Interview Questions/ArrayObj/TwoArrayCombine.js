let key=['name','age','work']
let value=['leo','18','dev']

function twoArrObj(key){
  let result={}
  for(let i=0; i<key.length; i++){
    result[key[i]]=value[i]
  }
  return result
}
console.log(twoArrObj(key))