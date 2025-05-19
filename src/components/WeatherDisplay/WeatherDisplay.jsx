import React from "react";

function WeatherDisplay({ data }) {
  if (!data) {
    return null;
  }

  const { name, main, weather, wind } = data;
  const iconCode = weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <div className="weather-display">
      <h2>{name}</h2>
      <img src={iconUrl} alt={weather[0].description} />
      <p>Temperature: {main.temp} °C</p>
      <p>{weather[0].description}</p>
      <p>Feels like: {main.feels_like} °C</p>
      <p>Humidity: {main.humidity} %</p>
      <p>Wind Speed: {wind.speed} km/h</p>
    </div>
  );
}

export default WeatherDisplay;
