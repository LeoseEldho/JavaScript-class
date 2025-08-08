let btn=document.querySelector('#btn');
let div=document.querySelector('#div');

btn.addEventListener('click', begin);

function begin(){
    let timerId=null;
    let x=0;
    let y=0;
    
     timerId=setInterval(frame,5);
     
    function frame(){
        if(x>=200 || y>=200){
            clearInterval(timerId);
        }else{
            x+=1;
            y+=1;
            div.style.top=y+'px'
            div.style.left=x+'px'
        }
    }
}     

{/* <button id="btn">begin</button> */}
{/* <div id="div"></div> */}