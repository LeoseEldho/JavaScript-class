function login(){
    let user='leo';
    let inbox=1;
    function message(){
        document.writeln(`hi ${user} You have ${inbox} Messages`)
        inbox=0;
    }
    return message
}
let myfunction=login()
myfunction()
myfunction()


    //    <button id="btn" onclick="message()">Login</button>

    // 
//     function login(){
//     let count=0;
//     function setcount(){
//         count +=2;
//         document.writeln(`the count is ${count}`);
//     }
//     return setcount
// }

// let result=login()
// result()
// result()
