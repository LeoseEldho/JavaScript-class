let countVowels=(str)=>{
    vowels='aieouAIEOU'
    count=0
    for(let char of str){
        for(let i=0; i<vowels.length; i++){
            if(char==vowels[i]){
                count++
            }
        }
    }
    return count
}
console.log(countVowels('apple'))



// let countVowels=(string)=>{
//     let count=0;
//     let vowels="aeiou"
//     for(let char of string){
//         if(vowels.includes(char))
//         count++
//     }
//     return count
// }
// console.log(countVowels('leose'))