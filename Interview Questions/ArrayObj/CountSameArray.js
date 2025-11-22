let arr=['apple','banana','orange','apple','orange','apple']

function CountArray(arr){
  let result={}
  for(let i=0; i<arr.length; i++){
    if(!result[arr[i]]){
      result[arr[i]]=1
    }else{
      result[arr[i]]=result[arr[i]]+1
    }
  }
  return result
}
console.log(CountArray(arr))