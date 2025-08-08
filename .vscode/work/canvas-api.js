{/* <canvas id="canvas" width="500" height="500"></canvas> */}html


// css-#canvas{
//     border: 1px solid black;
// }    

let canvas=document.querySelector('#canvas');
let context=canvas.getContext('2d');

context.beginPath();
context.lineWidth=8;
context.stockeStyle='red';

context.moveTo(0,0);
context.lineTo(250, 250)
context.lineTo(250, 500)
context.moveTo(500, 0)
context.lineTo(250, 250);
   
context.stroke()




// // draw a triangle     
// let canvas=document.querySelector('#canvas');
// let context=canvas.getContext('2d');

// context.fillStyle='green'
// context.beginPath();
// context.moveTo(250,0);
// context.lineTo(0,250)
// context.lineTo(500,250)
// context.lineTo(250,0)
   
// context.fill()


// // draw a square
// let canvas=document.querySelector('#canvas');
// let context=canvas.getContext('2d');

// context.fillStyle='green'
// context.strokeRect(0,0,250,250)
// context.fillRect(0,0,250,250)

// context.fillStyle='black'
// context.strokeRect(0,250,250,250)
// context.fillRect(0,250,250,250)

// context.fillStyle='red'
// context.strokeRect(250,250,250,250)
// context.fillRect(250,250,250,250)

// context.fillStyle='blue'
// context.strokeRect(250,0,250,250)
// context.fillRect(250,0,250,250)