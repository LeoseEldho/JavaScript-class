function update(){
  let count=0
  return function (){

    count++
    console.log(count)
  }
}
let x=update()
x()
x()
x()


// closure with set time out 
function x() {
  for (var i = 1; i <= 5; i++) {
    function close(v) {
      setTimeout(function () {
        console.log(v);
      }, i * 1000);
    }
    close(i)
  }
  console.log("hai");
}
x();


//-----------------------------------]
// function x() {
//   for (var i = 1; i <= 5; i++) {
//       setTimeout(function () {
//         console.log(i);
//       }, i * 1000);
//   }
//   console.log("hai");
// }
// x();