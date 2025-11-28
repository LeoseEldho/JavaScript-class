 function createMultiplier(x){
    return function (b){
      return x*b
    }
}

const triple=createMultiplier(5)
// const quadrable=createMultiplier(4)
// console.log(double(5))
console.log(triple(5))
// console.log(quadrable(5))
// console.log(double(10))
// console.log(triple(10))