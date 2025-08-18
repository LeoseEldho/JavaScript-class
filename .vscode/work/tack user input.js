let readline=require('readline')

const x=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

x.question( 'hello', function(fristname){
    console.log(`haha ${fristname}`)
    x.close()
});