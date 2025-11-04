
let m=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
let m2=[
    [9,8,7],
    [6,5,4],
    [3,2,1]
]

let matricesAdd=(a,b)=>{
    let result=[]

    for(let i=0; i<a.length; i++){
        let row=[]
        for(let j=0; j<a[i].length; j++){
            row.push(a[i][j]+b[i][j])
        }
        result.push(row)
    }
    return result
}

let sum=matricesAdd(m,m2)
console.log(sum)


// let a =[[1,2,3],
//        [4,5,6]]

// let b =[[7,8,9],
//         [6,8,3]]

// function addMatrix(a,b){
//     let result=[]
//     for(let i=0; i<a.length; i++){
//         result[i]=[]
//         for(let j=0; j<a[i].length; j++){
//             result[i][j]=a[i][j]+b[i][j]
//         }
//     }
//     return result
// }
// console.log(addMatrix(a, b))