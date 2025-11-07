let str='gfedcba'
let arr=str.split("")
let result=''

for(let i=0; i<arr.length; i++){
    for(let j=i; j<arr.length; j++){
        if(arr[i]>arr[j+1]){
            let temp=arr[j+1]
            arr[j+1]=arr[i]
            arr[i]=temp
        }
    }
    result+=arr[i]
}
console.log(result)