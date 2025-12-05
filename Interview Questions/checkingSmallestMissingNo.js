function missingNo(arr) {
    let x = 0;
    while (true) {
        let found = false;
        for (let i = 0; i < arr.length; i++){
            if (arr[i] == x) {
                found = true;
                break
            }
        }
        if (!found) {
            return x
        }
        x++
    }
}
console.log(missingNo([0,2,4,34]))


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