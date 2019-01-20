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
      return data.find(country => country.alpha2Code === `${cCode}`);
    });
};

// http://ipinfo.io/json?token=1a11bd55cc8f9c

const getLocation = () => {
  return fetch("http://ipinfo.io/json?token=1a11bd55cc8f9c").then(response => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`Lol`);
    }
  });
};
