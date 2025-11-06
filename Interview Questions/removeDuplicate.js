let arr = [1,2,3,4,5,4];
let result = [];

for(let i=0; i<arr.length; i++){
    let found=false;
    for(let j=0; j<result.length; j++){
        if(arr[i]===result[j]){
            found=true
            break
        }
    }
    if(!found){
        result[result.length]=arr[i]
    }
}
console.log(result)


const duplicate=(arr)=>{
    let result=[];
    for(let item of arr){
        if(!result.includes(item)){
            result.push(item)
        }
    }
    return result;
}
  
console.log(duplicate([1, 2, 2, 3, 4, 4]))  


// let input=[1,2,3,4,5,4]
// let result=input.filter((x,index)=> input.indexOf(x)===index)
// console.log(result)