function smallestMiss(arr){
   let num=1
   while(arr.includes(num)){
      num++
   }
   return num
}
console.log(smallestMiss([-1,0,1,2,3,5,6]))