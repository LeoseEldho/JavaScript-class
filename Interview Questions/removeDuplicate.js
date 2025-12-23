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




function removeDuplicates(arr) {
    let result=[]
    if (arr.length === 0) return 0;
    result[0]=arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== result[result.length-1]) {
            result[result.length]=arr[i]
        }
    }
    return result
}

let nums = [1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums))


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