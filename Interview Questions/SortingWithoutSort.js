let numbers=[5,2,9,1,7]
let n=numbers.length

for(let i=0; i<n-1; i++){
   for(let j=0; j<n-i-1; j++){
      if(numbers[j]>numbers[j+1]){
         let temp=numbers[j]
         numbers[j]=numbers[j+1]
         numbers[j+1]=temp
      }
   }
}

console.log(numbers)


// let numbers=[5,2,9,1,7]
// while(swapped){

//    for(let i=0; i<numbers.length-1; i++){
//       if(numbers[i]>numbers[i+1]){
//          let temp=numbers[i]
//          numbers[i]=numbers[i+1]
//          numbers[i+1]=temp

//       }
//    }
// }
// console.log(numbers)