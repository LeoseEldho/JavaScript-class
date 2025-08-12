async function getdata() {
    let response=await fetch('https://randomuser.me/api/');
    let data=await response.json()
    console.log(data)
}
getdata()