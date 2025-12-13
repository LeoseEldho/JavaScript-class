function expandString(s) {
  let result = "";
  for (let i = 0; i < s.length; i += 2){
    let char = s[i]
    let count =( s[i + 1])
    result+=char.repeat(count)
  }
  return result
}
console.log(expandString("a3b4c1"))