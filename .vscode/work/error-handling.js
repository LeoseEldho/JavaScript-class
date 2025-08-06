try{
    let x=window.prompt('enter a number');
    x=Number(x);
    if(isNaN(x)) throw 'this is not an number';
    if(x=='') throw 'enter somthing'
    document.writeln(x)
}
catch(error){
    document.writeln(error)
}finally{
    document.write('hahahaaa')
}