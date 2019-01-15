const Hangman = function(word, guesses) {
  this.word = word.toLowerCase().split("");
  this.guessedLetters = [];
  this.guesses = guesses;
};

Hangman.prototype.getPuzzle = function() {
  let puzzle = "";
  this.word.forEach(letter => {
    this.guessedLetters.includes(letter) || letter === " "
      ? (puzzle += letter)
      : (puzzle += "*");
  });
  return puzzle;
};

Hangman.prototype.guess = function(guess) {
  guess = guess.toLowerCase();
  const isUnique = !this.guessedLetters.includes(guess);
  const isBadGuess = !this.word.includes(guess);
  if (isUnique) {
    this.guessedLetters.push(guess);
  }

  if (isUnique && isBadGuess) {
    this.guesses--;
  }
};

const game1 = new Hangman("cat", 3);
const guessesEl = document.querySelector("#guesses");
const puzzleEl = document.querySelector("#puzzle");

puzzleEl.textContent = `Word: ${game1.getPuzzle()}`;
guessesEl.textContent = `Guesses: ${game1.guesses}`;

window.addEventListener("keypress", function(e) {
  const guess = String.fromCharCode(e.charCode);
  game1.guess(guess);
  puzzleEl.textContent = `Word: ${game1.getPuzzle()}`;
  guessesEl.textContent = `Guesses: ${game1.guesses}`;
});
