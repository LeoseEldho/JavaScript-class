function largestWord(sentence) {
    let word = ""
    let result=""
    for (let i = 0; i < sentence.length; i++){
        if (sentence[i] !== ' ') {
            word += sentence[i]
            // console.log(word)
        } else {
            if (word.length > result.length) {
                result=word
            }
            word=""
        }
    }
    return result
}
console.log(largestWord('i will always there for you'))