function counter(){
    var count=0
    this.incrementCount=function(){
        count++
        console.log(count)
    }
    this.decrementCount=function(){
        count--
        console.log(count)
    }
}
let incr= new counter()
incr.incrementCount()
incr.incrementCount()
incr.incrementCount()
incr.decrementCount()
incr.decrementCount()