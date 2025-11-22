const arr = [
  "person",
  ["name", "Roshan"],
  ["age", 25],
  ["address", ["city", "Kochi", "state", "Kerala"]],
];
//sdfewsfewsewsfdewsdfewsdfwsdfewasf
function arrayToObject(arr){
    let obj={}
    if(typeof arr[0] === 'string' && Array.isArray(arr[1])){
        obj[arr[0]]={}
        for(let i=1;i<arr.length;i++){
           if(Array.isArray(arr[i])){
            obj[arr[0]][arr[i][0]]=Array.isArray(arr[i][1])? arrayToObject(arr[i][1]):arr[i][1]
           }
        }
        return obj
    }
    for(let i=0;i<arr.length;i+=2){
        obj[arr[i]]=Array.isArray(arr[i+1])? arrayToObject(arr[i+1]):arr[i+1]
    }
    return obj
}
console.log(arrayToObject(arr))