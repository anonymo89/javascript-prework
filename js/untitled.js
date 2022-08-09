function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  } else if(argMoveId == 2){
      return 'papier';
  } else if(argMoveId == 3){
      return 'nożyce';
  } 

  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}


let randomNumber = Math.floor(Math.random() * 3 + 1);



let computerMove = getMoveName(randomNumber);

printMessage('Mój ruch to: ' + computerMove);



let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

printMessage('Twój ruch to: ' + playerMove); 

if (computerMove == playerMove) {
   printMessage("Remis!");
}

else if (
        (computerMove == "kamień" && playerMove == "papier") ||
        (computerMove == "nożyce" && playerMove == "kamień") ||
        (computerMove == "papier" && playerMove == "nożyce")
      ) {
        printMessage("Ty wygrywasz!");
      }
else if (
        (computerMove == "papier" && playerMove == "kamień") ||
        (computerMove == "kamień" && playerMove == "nożyce") ||
        (computerMove == "nożyce" && playerMove == "papier")
      ) {
        printMessage("Przegrywasz!");}
else {
        printMessage(
          "Nie mam wystarczającej ilości danych, by roztrzygnąć ten pojedynek :("
        );
      }
