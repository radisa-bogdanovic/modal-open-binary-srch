"use strict";
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let divZahistory= document.querySelector('.top10');
let datum=Date().toString();
let ucesnik= prompt('Unesite vase ime :')
while(ucesnik=="")
{ alert(`Molimo unesite ispravne vrednosti`)
  ucesnik= prompt('Unesite vase ime :')
}
function writeMessage(message) {
  document.querySelector(".message").textContent = message;
}
document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;
  if (guess < 1 || guess > 20) {
    writeMessage("Invalid Input");
  } else if (guess == randomNumber) {
    writeMessage("Correct Number ??");
    document.querySelector(".number").textContent = randomNumber;
    document.body.style.backgroundColor = "teal";
    document.querySelector('.check').disabled=true;
    localStorage.setItem(`${score} poena imao je ${ucesnik} u vreme ${datum}`, `Igrac ${ucesnik} je imao ${score} u vreme :${datum}`)
  
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== randomNumber) {
    if (score > 1) {
      writeMessage(guess > randomNumber ? "Too high!" : "Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      writeMessage("You lost the game!");
      document.querySelector(".score").textContent = 0;
      document.querySelector('.check').disabled=true;
    }
  }
  document.querySelector('.again').addEventListener('click', function(){
    document.querySelector(".score").textContent = 0;
    document.querySelector('.check').disabled=false;
    score=20;
    document.querySelector('.score').textContent= 0;
    document.querySelector('.number').textContent= '?';
    document.querySelector('.guess').value= '';
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    document.body.style.backgroundColor = '#37474f';
    
    
   
  })
  forTheEmperorLS();
});  
  function forTheEmperorLS(){
    let finalState=Object.keys(localStorage).sort();
    document.getElementById(`top10`).innerHTML='';
  if(finalState.length<=10){
    for(let i=finalState.length-1;i>=0;i--)
    {
      document.getElementById(`top10`).innerHTML+= `${(document.getElementById(`top10`).children.length)/2+1}. ${finalState[i]} <br /> <br />`
    }
  }
  else {
    for( let i=finalState.length-1;i>=finalState.length-10;i--){
      document.getElementById(`top10`).innerHTML+= `${(document.getElementById(`top10`).children.length)/2+1}. ${finalState[i]}  <br /> <br />`
    }
  }
  }
  forTheEmperorLS();