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

getPuzzle("2")
  .then(puzzle => {
    console.log(puzzle);
  })
  .catch(err => {
    console.log(`Error: ${err}`);
  });

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

getCurrentCountry()
  .then(country => {
    console.log(country.name);
  })
  .catch(error => {
    console.log(error);
  });
