let ages=[18,34,3,5,20,13];


function checkage(element){
    return ages=element>=18;
}

let adult=ages.filter(checkage);
adult.forEach(outptu)

function outptu(element){
    console.log(element)
}


// let user=[
//     {firstname:'leo',lastname:'messi',age:36},
//     {firstname:'john',lastname:'doe',age:20},
//     {firstname:'elon',lastname:'musk',age:36},
//     {firstname:'iron',lastname:'man',age:28}
// ];

// let result=user.filter((element)=>{
//     return element.firstname,element.age<=30;
// })

// console.log(result)

