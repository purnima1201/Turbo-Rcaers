class Game{
    constructor(){

    }
    getState(){
        database.ref("gameState").on("value",function (data){
            gameState = data.val();
        })
    }
    updateState(state){
        database.ref("/").update({gameState:state})
    }
    start(){
        if(gameState == 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }
    play(){
        form.hide();
        Player.getPlayerInfo();
        textSize(30);
        text("GAME START",120,100);
        if(allPlayers != undefined){
            var displayPosition = 130;
            for(var plr in allPlayers){
                if(plr== "player"+player.index){
                    fill ("red");
                }
                else{
                    fill ("black");
                }
                displayPosition+=20;
                textSize(15);
                text(allPlayers[plr].name+": "+allPlayers[plr].distance,120,displayPosition)
            }
        }
        if(keyIsDown(UP_ARROW)&&player.index!=null){
            player.distance+=50;
            player.update();

        }
    }
}