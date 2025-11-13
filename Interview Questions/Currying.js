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
