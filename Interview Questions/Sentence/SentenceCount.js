let sentence = "The world in full of carssss";
let count = 0;
let maxno = 0;

for (let i = 0; i < sentence.length; i++) {
  if (sentence[i] !== " ") {
    count++;
  } else {
    if (count > maxno) {
      maxno = count;
    }
    count = 0;
  }
}
if (count > maxno) {
  maxno = count;
}
console.log(maxno);
