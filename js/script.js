let randomNumber = Math.floor(Math.random() * 3 + 1);



let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
}
if(randomNumber == 2){
  computerMove = 'papier';
}
if(randomNumber == 3){
  computerMove = 'nożyce';
}


printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}
if(playerInput == '2'){
  playerMove = 'papier';
}
if(playerInput == '3'){
  playerMove = 'nożyce';
}

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


