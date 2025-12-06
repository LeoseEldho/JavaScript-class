let data = [["name", "roshan"], ["age", "35"],["gender", "m"]];
function toObj(data) {
  let result = {};
  for(let i=0; i<data.length; i++){
    // result[data[i][0]]=data[i][1]
    console.log(data[i][0],data[i][1])
  }
  return result;
}

console.log(toObj(data))
