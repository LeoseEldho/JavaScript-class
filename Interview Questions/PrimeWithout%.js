let num=99
let isPrime=true

if(num<=1){
   isPrime=false
}
for(let i=2; i<num/2; i++){
   let q=Math.floor(num/i)
   if(q*i==num){
      isPrime=false
   }
}
if(isPrime){
   console.log('Prime')
}else{
   console.log('not prime')
}