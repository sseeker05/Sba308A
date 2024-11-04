export function formatWeatherData(data) {
  const { main, name, sys, weather } = data;
  return {
    location: name,
    temperature: main.temp,
    description: weather[0].description,
    icon: `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`,
  };
}