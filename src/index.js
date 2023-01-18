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
  currentTemp.textContent = `${weather.main.temp} °F`;
  currentWeatherType.textContent = weather.weather[0].main;
  tempHighsLows.textContent = `${weather.main.temp_max} / ${weather.main.temp_min}`;

  feelsLike.textContent = weather.main.feels_like;
  windSpeed.textContent = weather.wind.speed;
  humidity.textContent = weather.main.humidity;
}

async function init() {
  const defaultSearch = 'san jose';
  const weather = await Weather.processedData(defaultSearch);
  // console.log(`city: ${weather.main.temp}`);
  loadWeatherInfo(weather);
}

function loadPage() {
  init();
}

loadPage();
// async function init() {
//   const initialURL = 'https://api.openweathermap.org/data/2.5/weather?q=san+jose&appid=056e2aa4b8b6e18688031d06515fe41c';
//   const response = await fetch(initialURL, { mode: 'cors' });
//   const weather = await response.json();

//   const city = document.querySelector('#city-name');
//   const currentTemp = document.querySelector('#current-temperature');
//   const currentWeatherType = document.querySelector('#current-weather-type');
//   const tempHighsLows = document.querySelector('#temp-highs-lows');

//   const feelsLike = document.querySelector('#feels-like');
//   const windSpeed = document.querySelector('#wind-speed');
//   const humidity = document.querySelector('#humidity');

//   city.textContent = weather.name;
//   currentTemp.textContent = weather.main.temp;
//   currentWeatherType.textContent = weather.weather[0].main;
//   tempHighsLows.textContent = `${weather.main.temp_max} / ${weather.main.temp_min}`;

//   feelsLike.textContent = weather.main.feels_like;
//   windSpeed.textContent = weather.wind.speed;
//   humidity.textContent = weather.main.humidity;
// }

// init();
