let arr = [10, 8, 6, 4, 2, 0]
let index=0
for (let i = 1; i <=3; i++){
    let mask=''
    for (let k = 0; k <=3 - i; k++){
        mask += " " + arr[index]
        index++
    }
    console.log( mask)
}