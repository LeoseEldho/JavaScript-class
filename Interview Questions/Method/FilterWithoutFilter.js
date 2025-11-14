let number=[1,2,3,4,5,6]
let even=myFilter(number,function(n){
    return n%2==0
})

function myFilter(number,condition){
    let result=[]
    let k=0
    for(let i=0; i<number.length; i++){
        if(condition(number[i])){
            result[k++]=number[i]
        }
    }
    return result
}

console.log(even)
//--------------------------------------------------------------------------

let num=[{
    name:'leos',
    age:12
},{
    name:'biju', age:19
}]
let n=myFilter(num,person=>person.age>=18)

function myFilter(num ,callback){
    let result=[]
    let k=0
    for(let i=0; i<num.length; i++){
        if(callback(num[i])){
            result[k++]=num[i]
        }
    }
    return result;
}
console.log(n)

//-----------------------------------------------------------------------------------------
function filter(arr) {
  return function (callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
        result[result.length] = arr[i];
      }
    }
      return result
  };
}
console.log(filter([1, 2, 3, 4])(n => n > 2));