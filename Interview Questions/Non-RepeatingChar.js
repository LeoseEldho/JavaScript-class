let input='aabbcdde'

function nonRepeat(n) {
    let result = {}
    for (let i = 0; i < n.length; i++){
        result[n[i]]=(result[n[i]]||0)+1
    }
    for (let j = 0; j < n.length; j++){
        if (result[n[j]] == 1) {
            return n[j]
        }
    }
    return result
}
console.log(nonRepeat(input))