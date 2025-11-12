let num = [1,2,3];

let secondLargest = (num) => {
    let max = num[0];
    let secondMax;
    for (let i = 0; i < num.length; i++) {
        if (num[i] > max) {
            secondMax = max;
            max = num[i];
        } else if (num[i] > secondMax && num[i] !== max) {
            secondMax = num[i];
        }
    }
    return secondMax;
}
console.log(secondLargest(num));

//---------------------------------------------------------------------------------------------------------------------
//secondSmallest No.


// let num=[1,2,3,5,4]
// function secondLargest(num){
//     let secondMax=Infinity
//     let max=Infinity
//     for(let i=0; i<num.length; i++){
//         if(num[i]<max){
//             secondMax=max
//             max=num[i]
//         }else if(num[i]<secondMax&&num[i]!==max){
//             secondMax=num[i]
//         }
//     }
//     return secondMax
// }
// console.log(secondLargest(num))