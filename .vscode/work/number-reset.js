// number rest
let count=0;

document.querySelector('#btn1').onclick=function(){
    count-=1;
    document.querySelector('#text').innerHTML=count;
}

document.querySelector('#btn2').onclick=function(){
    count=0;
    document.querySelector('#text').innerHTML=count;
}

document.querySelector('#btn3').onclick=function(){
    count+=1;
    document.querySelector('#text').innerHTML=count;
}