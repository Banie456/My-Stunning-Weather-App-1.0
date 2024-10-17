function updateWeather(response) {
  let temperatureElement = document.querySelector("#temperature-value");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "631da3a424966be5280f2o0c487tf7f3";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeather);
}

function updateCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-form-input").value;
  searchCity(cityInput);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", updateCity);

searchCity("Durban");