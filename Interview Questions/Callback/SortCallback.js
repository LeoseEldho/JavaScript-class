let sortArray=(arr,callback)=>{
  let sort=[...arr]
  for(let i=0; i<sort.length-1; i++){
    for(let j=0; j<sort.length-1-i; j++){
      if(callback(sort[j],sort[j+1])>0){
        [sort[j],sort[j+1]]=[sort[j+1],sort[j]]
      }
    }
  }
  return sort;
}
console.log(sortArray([5,2,8,1],(a,b)=>a-b))