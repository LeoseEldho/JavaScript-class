  class player{
     score=0;

     pause(){
        document.writeln(`you pause the game`)
    }
    exit(){
        document.writeln(`you exit the game`);
    }
  }

  let p1=new player();
  p1.score+=10
  document.writeln(p1.score)
  p1.exit()