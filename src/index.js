let now = new Date();
let today = document.querySelector("#current-date");
let hours = now.getHours();
let minutes = now.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[now.getDay()];
today.innerHTML = `${day} ${hours}:${minutes}`;

function city(event) {
  event.preventDefault();
  let input = document.querySelector(".search-input");

  let enteredCity = document.querySelector(".current-city");
  enteredCity.innerHTML = `${input.value}`;

  let apiKey = "o6a0fft3c6c9077334b37f3a1a5e3bdb";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${input.value}&key=${apiKey}&units=metric`;

  axios.get(apiURL).then(displayTemperature);
}
let search = document.querySelector(".form-input");
search.addEventListener("submit", city);

//

function displayTemperature(response) {
  let temperature = Math.round(response.data.temperature.current);

  let weather = document.querySelector("#current-temperature");
  weather.innerHTML = `${temperature}`;
}
