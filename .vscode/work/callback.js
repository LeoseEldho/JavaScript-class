let total =sum(2,3);

displayconsole(total)
displaydom(total)

function sum(a,b){
    let result =a+b;
    return result
}
function displayconsole(output){
    console.log(output)
}  
function displaydom(output){
    text.innerHTML=output 
}  


// 
//   <input type="text" id="box1" placeholder="Enter the number">
//   <input type="text " id="box2" placeholder="Enter the second No"><br>
//   <select name="operation" id="operation">
//     <option value="add">add</option>
//     <option value="sub">sub</option>
//     <option value="multi">multi</option> 
//   </select>
//   <button id="perform" onclick="perform()">calcu</button><br>

//   <label id="result"></label>

//
// function add(a,b){
//     return a+b;
// }
// function sub(a,b){
//     return a-b;
// }
// function multi(a,b){
//     return a*b;
// }


// function calculator(a,b,callback){
//     return callback(a,b);
// }
// function perform(){     
//     let a=Number(box1.value);
//     let b=Number(box2.value);
//     let op= operation.value;

//     let result;
//     if(op==="add"){
//         result=calculator(a, b, add);
//     }else if(op=="sub"){
//         result=calculator(a, b, sub);
//     }else if(op=="multi"){
//         result=calculator(a, b, multi);
//     }
//     document.getElementById("result").textContent = "Result: " + result;
// }

function add(num1,num2){
    let output= num1+num2;
    sum(output)
}

function sum(output){
    document.writeln(output)
}

add(5, 5)


function add(x,y,callback){
    let output =x*y;
    callback(output)
}
function sum(output){
    document.writeln(output)
}
add(3, 5, sum)