const mergeobj=(obj1,obj2)=>{
 const set=new Set([...obj1,...obj2]);
   return [...set];
}
console.log(mergeobj([1,2], [2,3,4]))
 