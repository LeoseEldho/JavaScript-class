let number=[1,2,3,5,6]

function myMap(num,callback){
let result=[]
for(let i=0; i<num.length; i++){
    result[i]=callback(num[i])
}
return result
}


let result=myMap(number, x=> x*2)
console.log(result)