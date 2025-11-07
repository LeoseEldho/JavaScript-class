let n = [0, 1, 2, 3, 4, 6];
let missing

for (let i = 0; i < n.length; i++) {
    if (n[i] !== i) {
        missing=i
        break
    }
}
console.log(missing)



function smallestMiss(arr){
   let num=1
   while(arr.includes(num)){
      num++
   }
   return num
}
console.log(smallestMiss([-1,0,1,2,3,5,6]))