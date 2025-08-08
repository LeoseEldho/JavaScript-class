   async function loadfile(){
    let fileload=true;

    if(fileload){
        return 'the file loaded';
    }else{
        return 'the file not loaded';
    }
   }

   loadfile().then(value=> document.writeln(value))
   .catch(error=> document.writeln(error))


   async function display(){
    return 'hello'
}        

display().then(
    function(value){
        document.writeln(`success ${value}`)
    },
    function(error){
        document.writeln(`faliure ${error}`)
    }
);   


async function getdata() {
    let response =await fetch('https://randomuser.me/api/');
    let data=await response.json();
    console.log(data.results[0].name.first)
}
getdata()   