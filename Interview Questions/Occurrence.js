let sentence = 'loki thor spiderman loki hulk';
let obj = {};
let word = "";
for (let i = 0; i <= sentence.length; i++) {
  if (sentence[i]!== " " && i < sentence.length) {
    word = word + sentence[i]; 
  } 
  else {
    if (word !== "") {
      if (obj[word]) {
        obj[word]++; 
      } else {
        obj[word] = 1;
      }
      word = ""; 
    }
  }
}
console.log(obj);