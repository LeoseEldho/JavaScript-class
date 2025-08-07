let btn=document.querySelector('#btn');
let car=document.querySelector('#car');
btn.addEventListener('click', ()=> {
    if(car.style.display=="none"){
        car.style.display="block";
    }else{
        car.style.display="none"
    }    
})

//   <button id="btn">toggle</button>
//   <img src="img/Dodge_Challenger_RT_7827044b9c.png" id="car"  display="none"srcset="">
//   <p>press the button</p>

//   #car{
//     width: 300px;
//     display: none;
// }     