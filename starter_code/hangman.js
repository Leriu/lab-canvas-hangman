var hangman;

 function Hangman() {
  this.words = ["hola", "ironhack", "jasmine", "javascript", "html", "bootstrap", "flexbox", "funciones"];
  this.secretWord = this.getWord();
  this.letters = [];
  this.guessedLetter = '';
  this.errorsLeft = 10;
 }

 Hangman.prototype.getWord = function () {

  var randomWord = Math.floor(Math.random() * this.words.length);
  return this.words[randomWord];
 };

 Hangman.prototype.checkIfLetter = function (keyCode) {
  if (keyCode >= 65 && keyCode <= 90){
    return true;
  } else {
    return false;
  }
 };

 Hangman.prototype.checkClickedLetters = function (key) {
  return this.letters.indexOf(key.toUpperCase()) == -1;
 };

 Hangman.prototype.addCorrectLetter = function (i) {
  this.guessedLetter += this.secretWord[i].toUpperCase();
 }; 

 Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft --;
 };

 Hangman.prototype.checkGameOver = function () {

  if (this.errorsLeft === 0) {
    return true;
  } else {
    return false;
  }
 };

 Hangman.prototype.checkWinner = function () {
 
  if (this.secretWord.length === this.guessedLetter.length) {
    return true;
  }else {
    return false;
  }
 };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
