let rev=(string)=> {
    let reversed=string.split("").reverse().join('')
    return string===reversed
}
console.log(rev('madam'))