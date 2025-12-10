function x(num) {
    return function (arr) {
       return arr.map(x=>x*num)
    }
}
let r = x(4)
console.log(r([1, 2, 3, 4]))
// Taking Fn as Argument ;
// returning function as result;
