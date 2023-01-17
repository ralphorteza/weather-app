import './style.css';

async function init() {
  const initialURL = 'https://api.openweathermap.org/data/2.5/weather?q=san+jose&appid=056e2aa4b8b6e18688031d06515fe41c';
  const response = await fetch(initialURL, {mode: 'cors'});
  const weatherData = await response.json();

  const city = document.querySelector('#city-name');
  const currentTemp = document.querySelector('#current-temperature');
  const currentWeatherType = document.querySelector('#current-weather-type');
  const tempHighsLows = document.querySelector('#temp-highs-lows');

  const feelsLike = document.querySelector('#feels-like');
  const windSpeed = document.querySelector('#wind-speed');
  const humidity = document.querySelector('#humidity');

  city.textContent = weatherData.name;
  currentTemp.textContent = weatherData.main.temp;
  currentWeatherType.textContent = weatherData.weather[0].main;
  tempHighsLows.textContent = `${weatherData.main.temp_max} / ${weatherData.main.temp_min}`;

  feelsLike.textContent = weatherData.main.feels_like;
  windSpeed.textContent = weatherData.wind.speed;
  humidity.textContent = weatherData.main.humidity;
}

init();