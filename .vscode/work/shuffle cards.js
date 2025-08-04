let card=['A','2','3','K','5','6','7','Q','8','9','10','J'];

shuffle(card)
document.writeln(card)

function shuffle(array){
    let currentindex=array.length;

    while(currentindex!=0){
        let randomindex=Math.floor(Math.random(array)*array.length);
        currentindex-=1;

        let temp=array[currentindex];
        array[currentindex]=array[randomindex];
        array[randomindex]=temp;
    }
    return array;
}
