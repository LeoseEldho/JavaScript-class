let username='leo';
let userinbox=0;

function login(){
    displayusername();
    displayuserbox();

    function displayusername(){
        document.writeln(`hey ${username}<br>`)
    }
    function displayuserbox(){
        document.writeln(`you have ${userinbox} message`);
    }
}

login()