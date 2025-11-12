let string='leose'
function isPalimdrome(string){
    let rev=''
    for(let i=string.length-1; i>=0; i--){
        rev+=string[i]
    }
    if(rev==string){
        console.log('pali')
    }else{
        console.log('not')
    }
}
isPalimdrome(string)


let rev=(string)=> {
    let reversed=string.split("").reverse().join('')
    return string===reversed
}
console.log(rev('madam'))