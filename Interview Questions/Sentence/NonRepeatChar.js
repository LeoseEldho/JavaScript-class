let input='aabbcddeggjffi'

function nonRepeat(n) {
    let result = {}
    let output=[]
    for (let i = 0; i < n.length; i++){
        result[n[i]]=(result[n[i]]||0)+1
    }
    for (let j = 0; j < n.length; j++){
        if (result[n[j]] == 1) {
            output[output.length]=n[j]
            
        }
    }
    return output
}
console.log(nonRepeat(input))