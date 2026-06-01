function compressString(s) {
  let result = "";
  let count = 1;

  for (let i = 1; i <= s.length; i++) {
    if (s[i] === s[i - 1]) count++;
    else {
      result += s[i-1 ] + count;
      count = 1;
    }
  }
  return result;
}
console.log(compressString('aaaabbcc'))
// OUTPUT=a4b2c2


const compressString = (str) => {
    let result = '';
    let count = 1;
    for (let i = 0; i < str.length; i++){
        if (str[i] == str[i + 1]) {
            count++
        } else {
            result += str[i] + count
            count=1
        }
    }
    return result
};
console.log(compressString("aaaabbcc"))