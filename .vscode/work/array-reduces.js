let prices=[15,25,25,65];

function checkout(total ,element){
    return total+element;
}

let value=prices.reduce(checkout);

console.log(value)



let add=[5,1,3,2,6];


let result=add.reduce((max,x)=>{ 
    if(x>max){
        max=x;
    }
    return max
});

console.log(result);



// let user=[
//     {firstname:'leo',lastname:'messi',age:36},
//     {firstname:'john',lastname:'doe',age:20},
//     {firstname:'elon',lastname:'musk',age:36},
//     {firstname:'iron',lastname:'man',age:28}
// ];
// let result=user.reduce((acc,curr)=>{
//     if(acc[curr.age]){
//         acc[curr.age]=++acc[curr.age]
//     }else{
//         acc[curr.age]=1
//     }
//     return acc
// },{})  

// console.log( result)