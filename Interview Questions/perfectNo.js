let n=10
function perfectNo(n){
    let sum=0
    for(let i=1; i<n; i++){
        if(n%i==0){
            sum+=i
        }
    }
    if(sum==n){
        console.log('true')
    }else{
        console.log('false')
    }
}
perfectNo(n)