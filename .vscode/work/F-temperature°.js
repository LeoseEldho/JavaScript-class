// let submitbutton=document.querySelector('#submitbutton');
// let textbox=document.querySelector('#textbox');
// let cbutton=document.querySelector('#cbutton');
// let fbutton=document.querySelector('#fbutton');


 let temp;
function getbutton(){

    if(cbutton.checked){
        temp=textbox.value;
        temp=Number(temp);
        temp=tocelsius(temp);
        templabel.innerHTML=temp+'°C' ;
    }else if(fbutton.checked){
         temp=textbox.value;
        temp=Number(temp);
        temp=tofahrenheit(temp);
        templabel.innerHTML=temp+'°F' ;

    }else{       
        templabel.innerHTML='select a option';
    }
}

function tocelsius(){
    return (temp - 32)*(5/9);
}
function tofahrenheit(){
    return temp*9/5 + 32;
}
       
//   <h1>enter a temperature</h1>
//   <input type="text"  id="textbox">
//   <h3>convert to</h3>
//   <input type="radio" name="c" id="cbutton">
//   <label >Celsius</label><br>
//   <input type="radio" name="c" id="fbutton">
//   <label >Fahrenheit</label><br>

//   <input type="button" value="submit" id="submitbutton" onclick="getbutton()"><br>

//   <label id="templabel"></label>