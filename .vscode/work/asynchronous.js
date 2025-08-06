function onesec(){
    document.writeln(`1 second`);
}
function twosec(){
    document.writeln(`2 second`);
}
function threesec(){
    document.writeln(`3 second`);
}

setTimeout(() => {
    threesec()
}, 3000);
setTimeout(() => {
    twosec()
}, 2000);
setTimeout(() => {
    onesec()
}, 1000);