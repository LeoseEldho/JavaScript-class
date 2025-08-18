const score={
    wins:0,
    losses:0,
    ties:0
};
   
function playGame(playermove){
const computermove= pickcomputermove();
let result='';

if(playermove==='rock'){

if(computermove==='rock'){
  result='tie.'
}else if(computermove==='paper'){
  result='you lose.'
}else if(computermove==='scissor'){
  result='you win.'
}
}else if(playermove==='paper'){
      if(computermove==='rock'){
    result='you win.'
  }else if(computermove==='paper'){
    result='tie.'
  }else if(computermove==='scissor'){    
    result='you lose.'  
  }
}else{
    
  if(computermove==='rock'){
    result='you lose.'
  }else if(computermove==='paper'){
    result='you win.'
  }else if(computermove==='scissor'){
    result='tie.'
  }
}
  if(result==='you win.'){
    score.wins+=1
  }else if(result==='you lose.'){
    score.losses+=1
  }else if(result==='tie.'){
    score.ties+=1
  }
alert(`You picked${playermove}. computer pick ${computermove}. ${result}
win:${score.wins} losses:${score.losses} tie:${score.ties}`);
}

function pickcomputermove(){
let randomNumber=( Math.round(Math.random()*3 ));

  
    let computermove='';
  if(randomNumber>=0&& randomNumber<1){
    computermove='rock'
  }else if(randomNumber>=1&&randomNumber<2){
    computermove='paper'
  }else{
    computermove='scissor';
  }
  return computermove
}




//   <h1>rock papper scissor</h1>  
// <button onclick="playGame('rock')
// " >rock</button>

// <button onclick="playGame('paper')

// ">paper</button>

// <button onclick="playGame('scissor')
// ">scissor</button>

// <button onclick="
//   score.wins=0;
//   score.losses=0;
//   score.ties=0;
// ">reset score</button>