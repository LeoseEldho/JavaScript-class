const score = { john: 40, alice: 70, Bob: 90 };
//output [['alice',70],[bob,90]]

function objArry(score) {
  let result = [];
  let i = 0;
  for (let key in score) {
    if (score[key] >= 50) {
      if (!result[i]) {
        result[i] = [key,score[key]];
      }
      i++;
    }
  }
  return result;
}
console.log(objArry(score));