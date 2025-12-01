const user = [
  { firstName: "leo", lastName: "Messi", age: 35 },
  { firstName: "elon", lastName: "musk", age: 39 },
  { firstName: "loki", lastName: "M", age: 1500 },
  { firstName: "thor", lastName: "odin", age: 3500 },
];
const result = user.reduce(function(acc,curr){
   if(curr.age<=40){
    acc[acc.length]=curr.firstName
   }
   return acc
},[])
console.log(result);
// ----------------------------------------------------------------------------------