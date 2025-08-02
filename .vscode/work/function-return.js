// let fristname=window.prompt('enter first name');
// let secondname=window.prompt('enter the secondname');

// let fullname;

// function getname(fristname,secondname){
//     let result=fristname+secondname;
//     return result;
// }

// fullname=getname(fristname, secondname);

// document.writeln('the fullname is :',fullname)

// 
let age;

age=window.prompt('Enter the age:');

age=getage(age);
document.writeln('The age is :',age)

function getage(age){
    let result=(age>=18)?'you can vote':'you can not vote';
    return result
}      