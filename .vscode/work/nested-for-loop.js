let symbol=window.prompt('enter the symbol')
let row=window.prompt('enter the row')
let colum =window.prompt('enter the colum')

for(i=1; i<=row; i++){
    for(j=1; j<=colum; j++){
    label.innerHTML +=symbol;  
}
    label.innerHTML +='<br>';
}                         