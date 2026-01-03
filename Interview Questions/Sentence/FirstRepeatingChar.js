function fistRepeating(str) {
  let obj = {}
  for (let i = 0; i < str.length; i++){
    obj[str[i]]=(obj[str[i]]||0)+1
  }
  for (let i = 0; i < str.length; i++){
    if (obj[str[i]] == 2) {
      return str[i]
    }
  }
  return obj
}
console.log(fistRepeating("abcac"));
