let num=[1,2,3,4,5,5,6,6]
let sum=0
for(let i=0; i<=num.length-1; i++){
    if((num[i]&1)==0){
        sum+=num[i]
    }
}
console.log(sum)