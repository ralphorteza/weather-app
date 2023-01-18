export default class Weather {
  static async processedData(cityName) {
    let processedCityName = cityName.trim();
    processedCityName = processedCityName.replace(' ', '+');
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${processedCityName}&appid=056e2aa4b8b6e18688031d06515fe41c&units=imperial`;
    const response = await fetch(url, { mode: 'cors' });
    const weatherData = await response.json();
    return weatherData;
  }
}
