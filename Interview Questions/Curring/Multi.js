function createMultiplier(a){
    return function(b){
        return a*b
    }
}

// const double=createMultiplier(2)
// const triple=createMultiplier(3)
// const quadrable=createMultiplier(4)
//------------------------------
// console.log(double(2))
// console.log(triple(5))
// console.log(quadrable(5))