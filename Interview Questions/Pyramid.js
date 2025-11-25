// function pyramid(r){
//     for(let i=1; i<=r; i++){
//         console.log("*".repeat(i))
//     }
// }

// pyramid(5)

function pyramid(star){
    for(let i=1; i<=star; i++){
        let line=''
        for(let k=1; k<=star-i; k++){
            line+=" "
        }
        for(let j=1; j<=(2*i-1); j++){
            line+="*"
        }
        console.log(line)
    }
}

pyramid(3)

// =----------------------------------------
function pyramid(star){
    for(let i=1; i<=star; i++){
        let line=''
        for(let k=1; k<=star-i; k++){
            line+=" "
        }
        for(let j=1; j<=(2*i-1); j++){
            line+="*"
        }
        console.log(line)
    }
    for(let i=star-1; i>=1; i--){
        let line=""
        for(let j=1; j<=star-i; j++){
            line+=" ";
        }
        for(let k=1; k<=(2*i-1); k++){
            line+='*'
        }
        console.log(line)
    }
}

pyramid(4)