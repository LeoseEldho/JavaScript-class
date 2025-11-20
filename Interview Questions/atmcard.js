let atm=['123456789','987654321']
let mask=''
for(let i=0; i<atm.length; i++){
  for(let j=0; j<atm[i].length-4; j++){
    mask+='*'
  }
  mask+=atm[i].slice(-4)
}
console.log(mask)



let input=['7123535215678','9234768955678']

let result=input.map((x)=>{
    let mask=""
    for(let i=0; i<x.length-4; i++){
        mask+="*"
    }   
    mask+=x.slice(-4)
    return mask
}
)
console.log(result)


// let input=['7123535215678','9234768955678']

// let result=input.map((x)=>{
//     return "*".repeat(x.length-4)+x.slice(-4)
// })

// console.log(result)


