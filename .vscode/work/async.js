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