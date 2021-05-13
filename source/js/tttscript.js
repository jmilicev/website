
var roundcounter = 0;

for(var i = 0; i<9; i++){
    document.getElementById(i).style.backgroundColor = "white";
}

function redirect(nav){
    window.location = "/"+nav;
}

function clicked(buttonid){
    
    if(roundcounter % 2 == 0){
        document.getElementById("status").textContent = "Red's Turn";
    }else{
        document.getElementById("status").textContent = "Blue's Turn";
    }

    roundcounter ++;
    document.getElementById(buttonid).disabled = true;

    if(roundcounter<10){
        if(roundcounter % 2 == 0){
            document.getElementById(buttonid).style.backgroundColor = "red";
        }else{
            document.getElementById(buttonid).style.backgroundColor = "blue";
        }
    }

    var winner = checkwin();

    if(roundcounter>8 || winner != "tie"){
        winner = checkwin();

        if(winner != "tie"){
            document.getElementById("status").textContent = "Winner is: "+winner;
        }else{
            document.getElementById("status").textContent = "Tie game!";
        }
        for(var i = 0; i<9; i++){
            document.getElementById(i).disabled = true;
        }
    }
}

function reset(){

    document.getElementById("status").textContent = "Blue's turn";

    for(var i = 0; i<9; i++){
        document.getElementById(i).style.backgroundColor = "white";
    }
    for(var i = 0; i<9; i++){
        document.getElementById(i).disabled = false;
    }
    roundcounter = 0;
}

function checkwin(){
    var winnerfound = false;
    var winnerName = "tie";

    //horizontal

    for(var i = 0; i<9; i+=3){
        if((document.getElementById(i).style.backgroundColor == document.getElementById(i+1).style.backgroundColor
        && document.getElementById(i+1).style.backgroundColor == document.getElementById(i+2).style.backgroundColor)
           && document.getElementById(i).style.backgroundColor!="white"){
            winnerfound = true;
            winnerName = document.getElementById(i).style.backgroundColor;
        }
    }
    //vertical
    for(var i = 0; i<3; i+=1){
        if((document.getElementById(i).style.backgroundColor == document.getElementById(i+3).style.backgroundColor
        && document.getElementById(i+3).style.backgroundColor == document.getElementById(i+6).style.backgroundColor)
        && document.getElementById(i).style.backgroundColor!="white"){
            winnerfound = true;
            winnerName = document.getElementById(i).style.backgroundColor;
        }
    }

    //diagonal
    if((document.getElementById(0).style.backgroundColor == document.getElementById(4).style.backgroundColor
        && document.getElementById(4).style.backgroundColor == document.getElementById(8).style.backgroundColor)
        && document.getElementById(0).style.backgroundColor!="white"){
            winnerfound = true;
            winnerName = document.getElementById(0).style.backgroundColor;
        }
    if((document.getElementById(2).style.backgroundColor == document.getElementById(4).style.backgroundColor
        && document.getElementById(4).style.backgroundColor == document.getElementById(6).style.backgroundColor)
        && document.getElementById(2).style.backgroundColor!="white"){
            winnerfound = true;
            winnerName = document.getElementById(2).style.backgroundColor;
        }

    if(winnerfound){return winnerName;}
    else{
        return "tie";
    }
    

}