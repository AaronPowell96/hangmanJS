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
