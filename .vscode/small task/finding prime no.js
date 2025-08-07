let num=0;
let isPrime=true;

if(num<=1){
    isPrime =false;
}

for(i=2; i<num; i++){
    if(num%i==0){
        isPrime=false;
        break;
    }
}

if(isPrime){
    document.writeln('is Prime');
}else{
    document.writeln('not prime')
}