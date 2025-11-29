function calculator(a,b ,callback){
 return callback(a,b)
}

console.log(calculator(5, 3, (a,b)=>a*b));
console.log(calculator(5, 3, (a,b)=>a+b));
console.log(calculator(5, 3, (a,b)=>a-b));
