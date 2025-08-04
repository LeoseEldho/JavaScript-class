function message(){
    let username='leo';
    let inbox=1;
    function newmess(){
        alert(`Hi ${username} You have ${inbox} messages`);
        inbox=0;
    }
    return newmess();
}
    //    <button id="btn" onclick="message()">Login</button>