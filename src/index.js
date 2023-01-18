import './style.css';
import Weather from './weather';

function loadWeatherInfo(weather) {
  const city = document.querySelector('#city-name');
  const currentTemp = document.querySelector('#current-temperature');
  const currentWeatherType = document.querySelector('#current-weather-type');
  const tempHighsLows = document.querySelector('#temp-highs-lows');

  const feelsLike = document.querySelector('#feels-like');
  const windSpeed = document.querySelector('#wind-speed');
  const humidity = document.querySelector('#humidity');

  city.textContent = weather.name;
  currentTemp.textContent = `${weather.main.temp}°F`;
  currentWeatherType.textContent = weather.weather[0].description;
  tempHighsLows.textContent = `↑${weather.main.temp_max}° | ↓${weather.main.temp_min}°`;

  feelsLike.textContent = `feels like: ${weather.main.feels_like}°`;
  windSpeed.textContent = `wind: ${weather.wind.speed} mph`;
  humidity.textContent = `humidity: ${weather.main.humidity}%`;
}

async function init() {
  const defaultSearch = 'san jose';
  const weather = await Weather.processedData(defaultSearch);
  loadWeatherInfo(weather);
}

async function searchHandler() {
  const searchedCity = document.querySelector('#simple-search').value;
  const weather = await Weather.processedData(searchedCity);
  loadWeatherInfo(weather);
}

function loadSearchQuery() {
  const btnSearch = document.querySelector('#btn-search');

  btnSearch.addEventListener('click', searchHandler);
}

function submitHandler(e) {
  e.preventDefault();
}

function loadPage() {
  const form = document.querySelector('form');
  form.addEventListener('submit', submitHandler);

  init();
  loadSearchQuery();
}

loadPage();
