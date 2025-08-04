let prices=[15,25,25,65];

function checkout(total ,element){
    return total+element;
}

let value=prices.reduce(checkout);

console.log(value)