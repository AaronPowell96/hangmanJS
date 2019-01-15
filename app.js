const game1 = new Hangman("cat", 2);
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
