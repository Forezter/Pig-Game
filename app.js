/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var currentScore,score,activeplayer;

NewGame();

document.querySelector(".btn-new").addEventListener('click',NewGame);

document.querySelector(".btn-roll").addEventListener('click',function(){

    var dice = Math.floor(Math.random() *  6) + 1;
    var dice2 = Math.floor(Math.random() *  6) + 1;

    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";
    var diceDOM2 = document.querySelector("#dado");
    diceDOM2.style.display = "block";
    diceDOM2.src = "dice-" + dice2 + ".png";

    if (dice != 1 && dice2!= 1){
        currentScore += dice + dice2;
        document.getElementById("current-" + activeplayer).innerText = currentScore;
    }
    else {
        
        NextPlayer();
    }

if (dice === 6 && dice2 === 6){
        Repetido++;
} else {
        Repetido = 0;
}
if (Repetido === 2) {
    currentScore = 0;
    score[activePlayer] = 0;
    nextPlayer();
    document.getElementById("score-" + activePlayer).innerText = score[activePlayer];
    document.getElementById("current-" + activePlayer).innerText =currentScore;
}
});


document.querySelector(".btn-hold").addEventListener('click',function(){

    score[activeplayer] += currentScore;
    document.getElementById("score-" + activeplayer).innerText = score[activeplayer];
    
    if(score[activeplayer] >= PointsWin){
        document.querySelector(".player-" + activeplayer +"-panel").classList.add("winner");
        document.getElementById("name-" + activeplayer).innerText = "WINNER!";
    }
    
    NextPlayer();

});

function NextPlayer(){
    
    document.getElementById("current-" + activeplayer).innerText = 0;

    activeplayer = activeplayer === 0 ? 1 : 0;
    currentScore = 0;

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector('.player-1-panel').classList.toggle("active");

    document.querySelector(".dice").style.display = 'none';
    document.querySelector("#dado").style.display = 'none';
}

function NewGame(){
    
    PointsWin= window.prompt("Points to win:")
    
    currentScore = 0;
    score = [0,0];
    activeplayer = 0;

    document.getElementById("score-0").innerText = 0;
    document.getElementById("score-1").innerText = 0;
    document.getElementById("current-0").innerText = 0;
    document.getElementById("current-1").innerText= 0;

    document.getElementById("name-0").innerText = "Player 1";
    document.getElementById("name-1").innerText = "Player 2";
    

    var dice = document.getElementsByClassName("dice")[0];
    dice.setAttribute("style","display:none");
    var dice2 = document.getElementsByClassName("dice")[1];
    dice.setAttribute("style","display:none");

    var player1 = document.getElementsByClassName("player-0-panel")[0];
    var player2 = document.getElementsByClassName("player-1-panel")[0];

    player2.classList.remove('active');
    player1.classList.remove('active');
    player2.classList.remove('winner');
    player1.classList.remove('winner');
    player1.classList.add("active");
}



    