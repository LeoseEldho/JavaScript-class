let arr=[{id:1,name:"leo"},{id:2,name:'athul'},{id:3,name:"roshan"}]

function arrayObj(arr){
  let result={}
  for(let i=0; i<arr.length; i++){
    result[arr[i].id]=arr[i]
  }
  return result
}
console.log(arrayObj(arr))

// ----------------------------------------------------------------------
let arr1=[{id:1,name:"leo"},{id:2,name:'athul'},{id:3,name:"roshan"}]

function Objarr1ay(arr1){
  let result={}
  for(let i=0; i<arr1.length; i++){
    result[i]=arr1[i]
  }
  return result
}
console.log(Objarr1ay(arr1))