function getresult(num1,operator,num2){
    let result =0
    num1=parseInt(num1)
    num2=parseInt(num2)
    switch (operator) {
        case '+':
            result= num1+num2
            break;
        case '-':
            result= num1-num2
            break;
        case '*':
        result= num1*num2
        break;
    case '/':
            result= num1/num2
            break;
        default:
            result =" invalid"
            break;
    }
    return result
}               

const readline=require('readline')
const r1= readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r1.question('enter first no', function(num1){
    r1.question('enter the operator', function(operator){
        r1.question('enter second number', function(num2){


            console.log(`The result is ${getresult(num1, operator,num2)}`)
            r1.close()
        })
    })
})