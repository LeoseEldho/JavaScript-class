const radius=[3,1,2,4]

function calculateArea(radius){
  const output=[]
  for(let i=0; i<radius.length ; i++){
    output.push(Math.PI*radius[i]*radius[i])
  }
  return output
}
console.log(calculateArea(radius))

function calculateCirumference(radius){
  const output=[]
  for(let i=0; i<radius.length ; i++){
    output.push(2*Math.PI*radius[i])
  }
  return output
}
console.log(calculateCirumference(radius))

function calculateDiameter(radius){
  const output=[]
  for(let i=0; i<radius.length ; i++){
    output.push(2*radius[i])
  }
  return output
}

console.log(calculateDiameter(radius))

//  Write the program like this :------------------------------------------------------------------------------------------------

const arr=[3,1,2,4]

let area=(arr)=>{
  return Math.PI*arr*arr
}
let Cirumference=(arr)=>{
  return 2*Math.PI*arr
}
let Diameter=(arr)=>{
  return arr*2
}
let calculate=(arr,logic)=>{
  let output=[]
  for(let i=0; i<arr.length; i++){
    output.push(logic(arr[i]))
  }
  return output
}
console.log(calculate(arr,area))
console.log(calculate(arr,Cirumference))
console.log(calculate(arr,Diameter))
// More simplyfied way ----------------------------------------------------------------------------------------------------------
let arr1=[1,2,3,4]

function calculate(arr1,logic){
  let result=[]
  for(let i=0; i<arr1.length; i++){
    result.push(logic(arr1[i]))
  }
  return result
}
console.log(calculate(arr1, x=>x*2))
console.log(calculate(arr1, x=>Math.PI*x*x))
console.log(calculate(arr1, x=>2*Math.PI*x))