const user = [
  { firstName: "leo", lastName: "Messi", age: 35 },
  { firstName: "elon", lastName: "musk", age: 35 },
  { firstName: "loki", lastName: "M", age: 1500 },
  { firstName: "thor", lastName: "odin", age: 3500 },
];
const result = user.reduce(function(acc,curr){
  if(acc[curr.age]){
    acc[curr.age]++
  }else{
    acc[curr.age]=1
  }
  return acc
},{})
console.log(result);