let input=[0,1,false,2,"",3,null,undefined,"hello"]
    let result=[]
for(let i=0; i<input.length; i++){
    if(input[i]){
        result[result.length]=input[i]
    }
}
console.log(result)


// let input=[0,1,false,2,"",3,null,undefined,"hello"]
// let result=input.filter(Boolean)

// console.log(result)