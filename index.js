// // Opening line to tell player to roll dice and the  player with the lowest roll goes first.
// // Dice start at 00
// // Let player pick color and computer takes other

let player = 'Suzanne';
let computer = 'Computer';
let dieWinner;

// // const bluepath = [div1, div2, div3, div4, div5, div6, div7, div8, div9, div10, div11, div12, div13, divhome];

// // const diceA = ["1", "2", "3", "4", "5", "6"];//use these two arrays to loop to get die to visually show up on the screen
// // const diceB = ["1", "2", "3", "4", "5", "6"];

//BUTTON
const button = document.querySelector("button");

// //DICE with with PNGS
const firstRandomNum = Math.floor((Math.random()*6) + 1);
const firstDiceImage = 'assets/dice' + firstRandomNum + '.png';
dice1 = document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage);
const secondRandomNum = Math.floor((Math.random()*6) + 1);
const secondDiceImage = 'assets/dice' + secondRandomNum + '.png';
dice2 = document.querySelectorAll('img')[1].setAttribute('src', secondDiceImage);

// // visual movement of parcheesi pieces
// // use array.find callback to cycle through divs. Returns 1st matching value and only one value is returned.
// // bluepath.find(bpath => {
// //   return bluepath.includes('nextdiv');
// // })

// ///
function game(){ //LOGIC KEEP ALL PLAY INSIDE GAME FUNCTION WITH NESTED ARRAY / OBJECTS B/C BOTH NEED TO HAVE THE SAME REFERENCE TYPE AKA ROOT??
 
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
    //ADD LOOP (SWITCH STATEMENT?) OF ARRAY diceA to reflect the actual visual image of the number rolled 
    //playerRoll shows up on dice[A] and later on with both dice[A] and dice[b]
  }
  
  rollDie(player, computer);
  
  function throwDice(){//dieWinner rolls two dice //CSS shakes the cup

}}
game();

// // function() {
// //   const diceA = ["1", "2", "3", "4", "5", "6"];//use these two arrays to loop to get die to visually show up on the screen
// //   // const diceB = ["1", "2", "3", "4", "5", "6"];
// //   for (let i = 0; i <= diceA.length; i++){
// //     console.log(i, diceA[i]);
// //   }
// //   for (let j = 0; j <= diceB.length; j++){
// //     console.log(j, diceB[j])
// //   }
// // }

// // function isValidMove(){
// //   if()
// // }


// // Pieces move from the nest to the colored starting space to the left of the nest, per rules in the following section.
//   //to move onto the track you need to roll a combo of '5'. This can be a singular die, or as a combo. If you roll a 5 on one die, but not on the other, you will use the second die to move a piece that has entered play, including the piece just entered. If you roll two 5s, move two pieces from your 'starting point' if present

//   //once a piece is on the board, the roll of the die determines how many spaces the pieces move. Die may be combined to move one piece, or may be used separately to move separate pieces, but you may not split a singular die into two moves. 

//   // moving pieces into play from the 'starting point' takes precedence over moving pieces around the board. If you throw a '5' and you have pieces on your starting point,' you must enter those pieces into play. if your blue space is blocakaded, and you have a piece that must ber netered into play, you lose your turn. 

// // all blue spaces are safe spaces (unless your opponent currently occupies it)

// //if you are able to stop the movement of your piece by exact count on a cream space that your opponent is on, you have captured that piece. That opponent's piece is returned to your opponent's nest.

// //you may never move your pieces onto an opponents red path, which belongs to each nest directly to the left of your starting point. 

//   //if you throw doubles, you immediately take another turn

//   //Parcheesi rules specify, two pieces of the same color that have stopped (by exact count) on the same space (cream or blue, including your ‘starting space’) form a blockade. No pieces may pass this blockade, including your own. You must move spaces equal to the die roll on each turn, if able. You can leave a blockade in place until you cannot move any other pieces, but you must break the blockade if you have no other moves.

//   //A piece only enters the ‘Home’ square by exact count. If you are 2 spaces from the ‘Home’ square and roll a 4 and 5, you cannot move that piece.
//   //to win the game, be the first to move all your pieces to the center ‘Home’ square. 

