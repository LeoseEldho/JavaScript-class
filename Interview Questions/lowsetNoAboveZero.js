let  mex=(arry)=>{
   let mex=0
   for(let n of arry){
      if(arry.includes(mex)){
         mex+=1
      }else{
         return mex
      }
   }
}
console.log(mex([-1,0,1,3,4]))