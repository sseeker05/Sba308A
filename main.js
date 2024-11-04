import './style.css'
import axios from 'axios';

import { getWeatherData } from './api.js';
import { formatWeatherData } from './data.js';

const weatherForm = document.querySelector('.weatherform');
const cityInput = document.querySelector('.cityInput');


weatherForm.addEventListener('submit', async (e) => {
  e.preventDefault();
 
  const city = cityInput.value.trim();
  if (!city) return;

  try {
    const weatherData = await getWeatherData(city);
    const formattedData = formatWeatherData(weatherData);
    displayWeatherData(formattedData);
    cityInput.value = ""
    cityInput.focus();
  } catch (error) {
    console.error(error);
   
  }
});

function displayWeatherData(data) {
  const weatherInfo = `
    <h2>Weather in ${data.location}</h2>
    <p>Temperature: ${data.temperature}°C</p>
    <p>${data.description}</p>
    <img src="${data.icon}" alt="Weather icon">
  `;
  const weatherContainer = document.createElement('div');
  weatherContainer.innerHTML = weatherInfo;
  document.body.appendChild(weatherContainer);
   weatherContainer.className = 'weather-box'
   setTimeout(() => {
    weatherContainer.remove(); 
}, 6000);
}

