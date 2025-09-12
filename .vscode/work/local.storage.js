// localStorage.setItem("key", "value")
// localStorage.getItem("")
// localStorage.removeItem("key")
// localStorage.clear()
// localStorage.key("index")


const input=document.querySelector('input')
let login=document.querySelector('#login')
let logout=document.querySelector('#logout')
let text=document.querySelector('h1')
login.onclick=()=>{
    if(input.value){
        localStorage.setItem('token', input.value)
}
}

logout.onclick=()=>{
    localStorage.clear()
    location.reload()
}


//<input type="text" name="" id="">
//<button id="login">login</button>
//<button id="logout">logout</button>

//<h1>please Login</h1>