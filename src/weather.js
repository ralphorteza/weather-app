export default class Weather {
  static async processedData(searchQuery) {
    let search = searchQuery.trim();
    search = search.replace(' ', '+');
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=056e2aa4b8b6e18688031d06515fe41c`;
    console.log(url);
    const response = await fetch(url, { mode: 'cors' });
    const weatherData = await response.json();
    console.log(weatherData.name);
    return weatherData.name;
  }
}
