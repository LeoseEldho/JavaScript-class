function task(){
 const myPromise=new Promise((resolve,reject)=>{
  resolve(5)
 })
 myPromise.
 then(num=>num*2)
 .then(num=>num+10)
 .then(result=>console.log(result))
}
task()