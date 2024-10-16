function updateCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-form-input").value;
  let city = document.querySelector("#city");
  city.innerHTML = cityInput;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", updateCity);



 let apiKey = "631da3a424966be5280f2o0c487tf7f3";
 let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;