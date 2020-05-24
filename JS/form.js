class Form{
    constructor(){
      this.greetings = createElement("h3");
      this.title = createElement("h2");
      this.input = createInput("?");
      this.button = createButton("play");
    }
    display(){

      this.title.html("Turbo Racers");
      this.title.position(130,0);  
      
      this.input.position(130,160);
      
      this.button.position(250,200);
      this.button.mousePressed(()=>{
          this.input.hide();
          this.button.hide();
          player.name = this.input.value();
          playerCount = playerCount+1;
          player.index = playerCount;
          player.update();
          player.updateCount(playerCount);
         
          this.greetings.html("Hello "+player.name);
          this.greetings.position(130,160);
          
      })
    }
    hide(){
      this.title.hide();
      this.greetings.hide();
      this.input.hide();
      this.button.hide();
    }
}