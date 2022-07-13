
// Opening line to tell player to roll dice and the  player with the lowest roll goes first.

let player = 'Suzanne';
let computer = 'Computer';
let dieWinner;
function rollDie(){
  let dieWinner;
  let playerRoll = Math.floor((Math.random()*6)+1);
  let computerRoll = Math.floor((Math.random()*6)+1);
  if (playerRoll < computerRoll){
    dieWinner = player;
    console.log (`${player} rolls ${playerRoll}`+ " and " + `${computer} rolls ${computerRoll}. ${player} plays first.`);
  }
  else if (playerRoll > computerRoll) {
    dieWinner = computer;
    console.log (`${player} rolls ${playerRoll}`+ " and " + `${computer} rolls ${computerRoll}. ${computer} plays first.`);
    }
  else {
    console.log (`${player} rolls ${playerRoll}`+ " and " + `${computer} rolls ${computerRoll}. We don't have a winner. Roll again, and let's see who goes first.`);
      //rollDie(); this code works but the automation is instant without letting the player interact //BUTTON THAT SAYS ROLL AGAIN?
  }
}

rollDie(player, computer);

//dieWinner rolls two dice //CSS shakes the cupt




// Pieces move from the nest to the colored starting space to the left of the nest, per rules in the following section.