let game1;
const guessesEl = document.querySelector("#guesses");
const puzzleEl = document.querySelector("#puzzle");

// puzzleEl.textContent = `Word: ${game1.puzzle}`;
// guessesEl.textContent = game1.message;

window.addEventListener("keypress", e => {
  const guess = String.fromCharCode(e.charCode);
  game1.guess(guess);
  render();
});

const render = () => {
  puzzleEl.textContent = `Word: ${game1.puzzle}`;
  guessesEl.textContent = game1.message;
};

const startGame = async () => {
  const puzzle = await getPuzzle("2");
  game1 = new Hangman(puzzle, 5);
  render();
};

startGame();

document.querySelector("#reset").addEventListener("click", function() {
  startGame();
});

// getPuzzle("2")
//   .then(puzzle => {
//     console.log(puzzle);
//   })
//   .catch(err => {
//     console.log(`Error: ${err}`);
//   });

// getCountryDetails("GB")
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(`Error: ${error}`);
//   });

// getLocation()
//   .then(location => {
//     return getCountryDetails(location.country);
//   })
//   .then(country => {
//     console.log(`${country.name}`);
//   })
//   .catch(error => {
//     console.log(`Error: ${error}`);
//   });

// getCurrentCountry()
//   .then(country => {
//     console.log(country.name);
//   })
//   .catch(error => {
//     console.log(error);
//   });
