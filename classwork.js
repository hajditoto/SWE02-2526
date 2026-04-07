document.getElementById("getWeather").addEventListener("click", getWeather);

async function getWeather() {
  const url = '[open-weather13.p.rapidapi.com](https://open-weather13.p.rapidapi.com/city/latlon/40.73061/-73.935242)'; // example: New York
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'YOUR_API_KEY_HERE', // replace this
      'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    document.getElementById("output").textContent = JSON.stringify(result, null, 2);
  } catch (error) {
    console.error(error);
  }
}
