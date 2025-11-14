function a(x){
  return  function b(y){
      return  function c(z){
           return x+y+z
        }
    }
}
console.log(a(1)(2)(3))
//--------------------------------------------------------------
function sum(a){
    return function(b){
        if(b==undefined) return a
        return sum(a+b)
    }
}
console.log(sum(2)(3)(4)(5)())
//-----------------------------------------------------------------
function sum(a,b){
    return function (c){
        return function (e,f){
            return a+b+c+e+f
        }
    }
}
console.log(sum(2,3)(4)(5,6))
//-----------------------------------------------------------------------
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