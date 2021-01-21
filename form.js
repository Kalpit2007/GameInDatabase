class Form{
    constructor(){ 
     this.input = createInput("name");
     this.button = createButton('play');
     this.greeting = createElement('h3');
    }
    
   display(){

    var title = createElement('h2');
    title.html("Car Racing Game");
    title.position(500,100);


 
    this.input.position(500,300);

    
    this.button.position(500,330);

    this.button.mousePressed(()=>{
       this.input.hide()
        this.button.hide()
        
       player.name=this.input.value()
        playerCount+=1;
        player.index=playerCount;
        player.update();
        player.updateCount(playerCount);

        
        this.greeting.html("hello "+ name);
        this.greeting.position(500,250);
    });


  } 


    
}

