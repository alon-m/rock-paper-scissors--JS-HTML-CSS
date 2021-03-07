let buttons = document.querySelectorAll(".playerHand");

let playerScore = 0;
let computerScore = 0;
let playerScoreText = document.getElementById("playerScore");
let computerScoreText = document.getElementById("computerScore");

buttons.forEach(button => {
  button.addEventListener("click", startRound);
});

let player=document.getElementById("playerChoice");
let computer=document.getElementById("computerChoice");
let hands = ["👊", "🖐️", "✌️"];
let ROCK = hands[0];
let PAPER = hands[1];
let SCISSORS = hands[2];

function startRound(){
  let computerChoice = Math.floor(Math.random() * buttons.length);
  player.textContent = `Player: ${this.textContent}`;
  computer.textContent = `Computer: ${hands[computerChoice]}`;
  score(hands[computerChoice], this.textContent)
}

function winner(i_winner)
{
  if(i_winner == "Player"){
    playerScore+=1;
    playerScoreText.textContent = `Player score: ${playerScore}`;
  }

  if(i_winner == "Computer"){
    computerScore+=1;
    computerScoreText.textContent = `Computer score: ${computerScore}`;
  }
  
  console.log(i_winner + " won");
}

function score(i_computerChoice, i_playerChoice)
{
  if (i_playerChoice == ROCK)
  {
    if(i_computerChoice == SCISSORS)
    {
      winner("Player");
    }
    else if(i_computerChoice == PAPER)
    {
      winner("Computer");
    }
  }

  if(i_playerChoice==PAPER)
  {
    if(i_computerChoice==ROCK)
    {
      winner("Player");
    }
    else if(i_computerChoice == SCISSORS)
    {
      winner("Computer");
    }
  }

  if(i_playerChoice==SCISSORS)
  {
    if(i_computerChoice == PAPER)
    {
      winner("Player");
    }
    else if(i_computerChoice == ROCK)
    {
      winner("Computer");
    }
  }
}
