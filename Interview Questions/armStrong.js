let n=153
function armStronge(n){
    let sum=0
    let temp=n
    while(n>0){
        rem=n%10
        sum+=rem**3
        n=Math.floor(n/10)
    }
    if(temp===sum){
        console.log('yes')
    }else{
        console.log('Not')
    }
}
armStronge(n)