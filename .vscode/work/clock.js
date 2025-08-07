setInterval(update,1000)

 function update(){
    let date=new Date();
    clock.innerHTML=formate(date);

    function formate(date){
        let hours=date.getHours();
        let min=date.getMinutes();
        let sec=date.getSeconds();
        let amorpm= hours>12? 'pm':'am';
        hours=(hours % 12 )|| 12;

        hours=addzero(hours);
        min=addzero(min);
        sec=addzero(sec)
        return `${hours}: ${min}: ${sec} ${amorpm}`
    }
    function addzero(time){
        time=time.toString();
        return time.length <2? '0'+time:time;
    }
 }
 update()  