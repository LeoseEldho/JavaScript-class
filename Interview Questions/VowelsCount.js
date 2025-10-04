let countVowels=(string)=>{
    let count=0;
    let vowels="aeiou"
    for(let char of string){
        if(vowels.includes(char))
        count++
    }
    return count
}
console.log(countVowels('leose'))