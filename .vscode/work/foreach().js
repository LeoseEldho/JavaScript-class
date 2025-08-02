let student=['abc','def','ghi'];

student.forEach(capps)
student.forEach(output)

function capps(element,index,array){
    array[index]=element.innerHTML=element[0].toUpperCase()+element.substring(1)
}

function output(result){
    document.writeln(result)
} 