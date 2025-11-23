const arr = [
  { name: "Alice", dept: "IT", role: "Developer" },
  { name: "Bob", dept: "IT", role: "Tester" },
  { name: "Charlie", dept: "HR", role: "Recruiter" },
  { name: "David", dept: "IT", role: "Developer" }
];

function arrObjAdd(arr){
    let result={}
    for(let i=0; i<arr.length; i++){
        let {name,dept,role}=arr[i]
        if(!result[arr[i].dept]){
            result[dept]={}
        }
        if(!result[arr[i].dept][arr[i].role]){
            result[dept][role]=[]
        }
        result[dept][role][result[dept][role].length]=arr[i].name
    }
    return result
}
console.log(arrObjAdd(arr))