const user = [
  { firstName: "leo", lastName: "Messi", age: 35 },
  { firstName: "elon", lastName: "musk", age: 39 },
  { firstName: "loki", lastName: "M", age: 1500 },
  { firstName: "thor", lastName: "odin", age: 3500 },
];
const result = user.filter((x)=>x.age<=40).map((x)=>x.firstName)
console.log(result);