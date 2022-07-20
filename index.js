//board game array
// const board = [
//   bluePiece4, null, null, null, null, null]

// // Opening line to tell player to roll dice and the  player with the lowest roll goes first.
// // Dice start at 00
// // Let player pick color and computer takes other
const firstRandomNum = Math.floor((Math.random()*6)+1);
const firstDiceImage = 'assets/dice' + firstRandomNum + '.png';
dice1 = document.querySelector('#dicea').setAttribute('src', firstDiceImage);
const secondRandomNum = Math.floor((Math.random()*6) + 1);
const secondDiceImage = 'assets/dice' + secondRandomNum + '.png';
dice2 = document.querySelector('#diceb').setAttribute('src', secondDiceImage);
let player = 'Player1';
let computer = 'Computer';
let dieWinner;

// initialize arrays
// let bluePiece1 = "bluePiece1"
// let bluePiece2 = "bluePiece2"
// let bluePiece3 = "bluePiece3"
// let bluePiece4 = "bluePiece4"

// bluePieces = [bluePiece1, bluePiece2, bluePiece3, bluePiece4];
// yellowPieces = [yellowPiece1, yellowPiece2, yellowPiece3, yellowPiece4];
// redPieces = [redPiece1, redPiece2, redPiece3, redPiece4];
// peachPieces = [peachPiece1, peachPiece2, peachPiece3, peachPiece4];


// const bluePath = [bluenest, div0, div1, div2, div3, div4, div5, div7, div8, div9, div10, div11, div12, divhome];
// const yellowPath = [div15, div16, div17, div18, div19, div20, div7, div8, div9, div10, div11, div12, div14, divhome]

//BUTTON
const button = document.querySelector("button");
//OR CLICK ON THE DICE TO ROLL THEM

// dice with with .pngs
// create opening scene with empty dice, and then a single dice roll to see who starts, and then onto both, const dicestartgame = src .. .dice0??


const pawns = {
  nest: [],
  onPath: [],
  color: ["blue", "yellow", "red", "peach"],
  id: "'1', '2', '3', '4'",
  initializeBoard(){
    const {color, id, nest} = this;
    for(let id of ids) {
      for (let color of colors){
        nest.push ({
          id,
          color 
        });

      }
    }
    return nest;
  },

  drawPawn() {
    const pawn = this.nest();
    this.onPath.push(pawn);
    return pawn;
  }
}




function game(){

  
  openingRollofDie = () => {
    let dieWinner;
    let playerRoll = Math.floor((Math.random()*6)+1);
    let computerRoll = Math.floor((Math.random()*6)+1);
    console.log(dice1, dice2);
    if (playerRoll < computerRoll){
      dieWinner = player;
      console.log(`${player} rolls ${playerRoll}`+ " and " + `${computer} rolls ${computerRoll}. ${dieWinner} plays first.`);
    }
    else if (playerRoll > computerRoll) {
      dieWinner = computer;
      console.log(`${player} rolls ${playerRoll}`+ " and " + `${computer} rolls ${computerRoll}. ${dieWinner} plays first.`);
      }
    else {
      console.log(`${player} rolls ${playerRoll}`+ " and " + `${computer} rolls ${computerRoll}. We don't have a winner. Roll again, and let's see who goes first.`);
        //rollDie(); this code works but the automation is instant without letting the player interact //BUTTON THAT SAYS ROLL AGAIN?
    }


  }
  function begin(){

  }
 
  openingRollofDie = () => {
    let dieWinner;
    let playerRoll = Math.floor((Math.random()*6)+1);
    let computerRoll = Math.floor((Math.random()*6)+1);
    console.log(dice1, dice2);
    if (playerRoll < computerRoll){
      dieWinner = player;
      console.log(`${player} rolls ${playerRoll}`+ " and " + `${computer} rolls ${computerRoll}. ${dieWinner} plays first.`);
    }
    else if (playerRoll > computerRoll) {
      dieWinner = computer;
      console.log(`${player} rolls ${playerRoll}`+ " and " + `${computer} rolls ${computerRoll}. ${dieWinner} plays first.`);
      }
    else {
      console.log(`${player} rolls ${playerRoll}`+ " and " + `${computer} rolls ${computerRoll}. We don't have a winner. Roll again, and let's see who goes first.`);
        //rollDie(); this code works but the automation is instant without letting the player interact //BUTTON THAT SAYS ROLL AGAIN?
    }


  }
  //call openingRollofDie
  openingRollofDie(player, computer)

  //roll of two dice with onclick of button
  function shakeTwoDice(newRoll) {
    const elem = document.getElementById('para');
    elem.style.color = newRoll;
    //dieWinner rolls two dice //CSS shakes the cup

  //check for doubles
  function checkForDieMatch(){
    if(firstRandomNum === secondRandom) {
      //player gets to take another turn immediately
      alert("you've rolled a double and that entitles you to do something")
    }
  }

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

//check function syntax
function rollAFive(){
  if("firstRandomNum" || "secondRandomNum" || "firstRandomNum + secondRandomNum" === "5"){
    rollTwoDiceBlue()
  }
}



// //Die may be combined to move one piece, or may be used separately to move separate pieces, but you may not split a singular die into two moves.
// function diceToMoves{
//   if("firstRandomNum")
// }


var blueplayerLocation = 0;
var yellowplayerLocation = 58;

const rollTwoDiceBlue= ()=>{
  const dice = firstRandomNum + secondRandomNum;
  document.querySelector(`#div${(blueplayerLocation)}`).classList.remove("bluecircle");
  blueplayerLocation += dice
  console.log(blueplayerLocation)
  if(blueplayerLocation > 28){
    alert('The player has won!')
    return
  }
   document.querySelector(`#div${(blueplayerLocation)}`).classList.add("bluecircle");
   rollTwoDiceYellow();
}


const rollTwoDiceYellow= ()=>{
  const dice = secondRandomNum;
  document.querySelector(`#div${(yellowplayerLocation)}`).classList.remove("yellowcircle");
  yellowplayerLocation -= dice
  console.log(yellowplayerLocation)
  if(yellowplayerLocation < 30){
    alert('The computer has won!')
    return
  }
   document.querySelector(`#div${(yellowplayerLocation)}`).classList.add("yellowcircle");
}
