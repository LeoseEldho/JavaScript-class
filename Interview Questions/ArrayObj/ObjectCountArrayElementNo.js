let arr=['apple','kiwi','banana']
function arrayObj(arr){
  let result={}
  for(let i=0; i<arr.length; i++){
    result[arr[i][0]]=Length(arr[i])
  }
  return result
}
console.log(arrayObj(arr))

function Length(val){
  count=0
  while(val[count]){
    count++
  }
  return count
}