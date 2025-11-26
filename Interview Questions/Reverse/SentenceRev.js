let sentence='hi i like you & '
function revSent(sentence){
    let word=''
    let arr=[]
    rev=''
    for(let i=0; i<sentence.length; i++){
        if(sentence[i]!==" "){
            word+=sentence[i]
        }else{
            arr[arr.length]=word
            word=''
        }
    }
    arr[arr.length]=word
    for(let j=arr.length-1; j>=0; j--){
        rev+=arr[j]+" "
    }
    return rev
}
console.log(revSent(sentence))