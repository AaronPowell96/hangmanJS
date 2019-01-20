const getPuzzle = wordCount => {
  return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error(`Unable to fetch data`);
      }
    })
    .then(data => {
      return data.puzzle;
    });
};

const getCountryDetails = cCode => {
  return fetch("http://restcountries.eu/rest/v2/all")
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error(`Eorrororor`);
      }
    })
    .then(data => {
      const country = data.find(country => country.alpha2Code === `${cCode}`);
      return country.name;
    });
};
