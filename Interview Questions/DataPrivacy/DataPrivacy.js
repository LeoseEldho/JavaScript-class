function outer(){
   let  counter=0
    function inner(){
        counter++
        console.log(counter)
    }
    return inner
}
let count1=outer()
let count2=outer()
count1()
count1()
count2()