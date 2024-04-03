function getComputerChoice(){
    const choise=['Rock','Paper','Scissor'];
    return choise[Math.floor(Math.random()*choise.length)];
}
function getPlayerSelection() {
    const choise=['Rock','Paper','Scissor'];
    const player = prompt("Choose between rock paper and scissors:","");
    return player;
  }
  
function playGame(){
    for (let i = 0; i <= 4; i++) {
    const cs = getComputerChoice();
    const ps = getPlayerSelection();
    function playRound(playerSelection,computerSelection){
        while (cs==Rock){
            if (ps==Rock){
                return "draw"
                if (ps==Paper) {
                    return "Paper beats Rock"
                    if (ps==Scissor) {
                        return "Rock beats Scissor"
                    } else {
                        break;
                    }
            }
        }
        while (cs==Paper){
            if (ps==Paper){
               return "draw"
                if (ps==Rock) {
                    return "Paper beats Rock"
                    if (ps==Scissor) {
                       return "Scissor beats Paper"
                }       else {
                           break;
                }
        }
        }
        }
        while (cs==Scissor){
            if (ps==Scissor){
               return "draw"
                if (ps==Rock) {
                    return "Rock beats Scissor"
                    if (ps==Paper) {
                       return "Scissor beats Paper"
                }       else {
                           break;
                }
        }
        }
        }

}
}
    }

}
playGame();
