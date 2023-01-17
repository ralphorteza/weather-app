import './style.css';

function init() {
  const initialURL = 'https://api.openweathermap.org/data/2.5/weather?q=san+jose&appid=056e2aa4b8b6e18688031d06515fe41c';
  fetch(initialURL, {mode: 'cors'})
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    console.log(response);
  });
}

init();