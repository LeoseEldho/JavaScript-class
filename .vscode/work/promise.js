let promise =new Promise(function(resolved,rejected){
    // resolved('pass');
    // rejected('fail');
    setTimeout(() => {
        resolved('pass')
    }, 3000);
})

promise.then(
    function(value){
        document.writeln(`the program is ${value}`)
    },
    function(failure){
        document.writeln(`the program is ${failure}`)
    }
)
document.writeln(promise)