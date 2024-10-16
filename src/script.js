function updateCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-form-input").value;
  let city = document.querySelector("#city");
  city.innerHTML = cityInput;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", updateCity);
