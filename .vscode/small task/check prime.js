isPrime=(num)=>{
    if(num<=1){
        return false
    }

    for(let i=2; i<=num/2; i++){
        if(num%i==0)
        return false
    }
    return true
}

let lower=1,upper=10

for(let i=lower; i<=upper; i++){
    if(isPrime(i)){
        console.log(`${i} is prime`)
    }else{
        console.log(`${i} is not prime`)
    }
    
}   