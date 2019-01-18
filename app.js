const game1 = new Hangman("cat", 2);
const guessesEl = document.querySelector("#guesses");
const puzzleEl = document.querySelector("#puzzle");

puzzleEl.textContent = `Word: ${game1.puzzle}`;
guessesEl.textContent = game1.message;

window.addEventListener("keypress", e => {
  const guess = String.fromCharCode(e.charCode);
  game1.guess(guess);
  puzzleEl.textContent = `Word: ${game1.puzzle}`;
  guessesEl.textContent = game1.message;
});

getPuzzle("2").then(
  data => {
    console.log(data);
  },
  err => {
    console.log(`error: ${err}`);
  }
);

getCountryDetails("GB").then(
  data => {
    console.log(data.name);
  },
  error => {
    console.log(`Error: ${error}`);
  }
);
