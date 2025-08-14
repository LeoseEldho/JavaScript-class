let timedisplay=document.querySelector('.timedisplay');
let sbtn=document.querySelector('#sbtn');
let pbtn=document.querySelector('#pbtn');
let rbtn=document.querySelector('#rbtn');

let starttime=0;
let elapsedtime=0;
let currenttime=0;
let paused=true;
let intervalid;
let hrs=0;
let mins=0;
let secs=0;

sbtn.addEventListener('click', ()=>{
    if(paused){
        paused=false;
        starttime=Date.now()-elapsedtime;
        intervalid=setInterval(updatetime,1000)
    }
});
pbtn.addEventListener('click', ()=>{    
    if(!paused){
        paused=true;
        elapsedtime=Date.now()-starttime;
        clearInterval(intervalid);
    }     
});
rbtn.addEventListener('click', ()=>{
    paused=true;
    clearInterval(intervalid);
    starttime=0;
    elapsedtime=0;
    currenttime=0;
    hrs=0;
    mins=0;
    secs=0;
    timedisplay.textContent="00:00:00";
});

function updatetime(){
    elapsedtime=Date.now()-starttime;

    secs=Math.floor((elapsedtime/1000)%60);
    mins=Math.floor((elapsedtime/(1000*60))%60);
    hrs=Math.floor((elapsedtime/(1000*60*60))%60);

    secs=pad(secs);
    mins=pad(mins);
    hrs=pad(hrs);

    timedisplay.textContent=`${hrs}:${mins}:${secs}`;

    function pad(unit){
        return(("0")+unit).length>2? unit:'0'+unit;
    }
}    



  <div class="timecontainer">
    <div class="timedisplay">00:00:00</div>
    <button id="sbtn" class="time">start</button>
    <button id="pbtn" class="time">pause</button>
    <button id="rbtn" class="time">reset</button>
  </div>


// .time{
//     width: 80px;
//     height: 30px;
//     border: 3px solid ;
//     border-radius: 12px;
//     background-color: #333333;
//     color: white;
//     cursor: pointer;
//     font-family: monospace;
// }
// .timedisplay{
//     font-size: 75px;
//     color: #40c437;
//     font-family: monospace;
// }
// .timecontainer{
//     text-align: center;
//     border: 3px solid;
//     border-radius: 25px;
//     background-color: #222222;
// }     