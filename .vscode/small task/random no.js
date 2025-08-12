function get(){
    return Math.floor(Math.random()*5 )
}
document.writeln(get())   



function get(){
    return Math.floor(Math.random()*6 )
}

for(i=0; i<=5; i++){
    document.writeln(get())
}