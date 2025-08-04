    let number=[1,2,3,4,5];

let sqares=number.map(sqare);
sqares.forEach(output)

function sqare(element){
    return Math.pow(element,2);
}

function output(element){
    document.writeln(element)
} 