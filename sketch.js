var canvas,gameState = 0,playerCount,database,form,player,game,allPlayers;


function setup(){
  database = firebase.database();
  canvas = createCanvas(400,400);
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  if(playerCount == 4){
    game.updateState(1);
    
  }
  if(gameState == 1){
    clear();
    game.play();
  }
}

