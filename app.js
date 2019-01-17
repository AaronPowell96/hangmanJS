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

const request = new XMLHttpRequest();

request.addEventListener("readystatechange", e => {
  if (e.target.readyState === 4 && e.target.status === 200) {
    const data = JSON.parse(e.target.responseText);
    console.log(data);
    const country = data.find(country => country.alpha2Code === "GB");
    console.log(country.name);
  } else if (e.target.readyState === 4) console.log("Unable to fetch data");
});

request.open("GET", "http://restcountries.eu/rest/v2/all");
request.send();
