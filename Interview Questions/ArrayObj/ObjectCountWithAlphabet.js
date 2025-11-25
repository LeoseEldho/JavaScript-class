let arr=['apple ','bannana','avacado','berry','kiwi']
function arrayObj(arr){
  let result={}
  for(let i=0; i<arr.length; i++){
    if(!result[arr[i][0]]){
      result[arr[i][0]]=[]
    }
    result[arr[i][0]][result[arr[i][0]].length]=arr[i]
  }
  return result
}

console.log(arrayObj(arr))
