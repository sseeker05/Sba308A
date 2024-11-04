const API_KEY = '89f1d724d74a606fd0dc7daab8a81ce4';
const API_URL = 'https://api.openweathermap.org/data/2.5/';

async function getWeatherData(city) {
  const response = await fetch(`${API_URL}weather?q=${city}&units=metric&appid=${API_KEY}`);
  const data = await response.json();
  return data;
}

export { getWeatherData };