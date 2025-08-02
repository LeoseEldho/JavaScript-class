let btn=document.querySelector('#btn');
let box=document.querySelector('#box');

const answer=Math.floor(Math.random()*9+1) ;

let guesses=0;

function getguess(){

    let guess= box.value
    guesses+=1;

    if(guess==answer){
        alert(`is the ${answer} it took you ${guesses} guesses`);
    }else if(guess<answer){
        alert('too small');
    }else{
        alert('too large')
    }
}



//   <h1>Number Guessing Game</h1>
//   <p>pick the number</p>
//   <label for="">enter the number 0-9</label>
//   <input type="text" id="box">
//   <input type="button" value="submit" id="btn" onclick="getguess()"></input>