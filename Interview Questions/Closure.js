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