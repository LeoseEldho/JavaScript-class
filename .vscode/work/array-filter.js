let ages=[18,34,3,5,20,13];


function checkage(element){
    return ages=element>=18;
}

let adult=ages.filter(checkage);
adult.forEach(outptu)

function outptu(element){
    console.log(element)
}