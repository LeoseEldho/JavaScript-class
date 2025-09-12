    let number=[1,2,3,4,5];

let sqares=number.map(sqare);
sqares.forEach(output)

function sqare(element){
    return Math.pow(element,2);
}

function output(element){
    document.writeln(element)
}     


let user=[
    {firstname:'leo',lastname:'messi',age:35},
    {firstname:'john',lastname:'doe',age:23},
    {firstname:'elon',lastname:'musk',age:36},
    {firstname:'iron',lastname:'man',age:28}
];
let result=user.map((x)=>{
    return x.firstname+" "+x.lastname
})

console.log(result)


// let date=['2023-4-4','2025-4-5','2035-1-7']


// let formate=((element)=>{
//     let part=element.split("-")
//     return `${part[1]}/${part[0]}/ ${part[2]}`
// })

// let result=date.map(formate)
// console.log(result)