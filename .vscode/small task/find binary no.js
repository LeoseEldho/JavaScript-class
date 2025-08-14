let arr=[5,1,3,2,6];

let binary =((element)=>{ return element.toString(2) })
let result=arr.map(binary);
console.log(result)