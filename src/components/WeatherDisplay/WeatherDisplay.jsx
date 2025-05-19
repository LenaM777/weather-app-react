import React from "react";
import "./WeatherDisplay.css";

function WeatherDisplay({ data }) {
  if (!data) {
    return null;
  }

  const { name, main, weather, wind } = data;
  const iconCode = weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <div className="weather-display">
      <h2 className="weather-city">{name}</h2>
      <img src={iconUrl} alt={weather[0].description} />
      <p className="temperature">{main.temp.toFixed(0)}&deg;C</p>
      <p className="weather-description">
        {weather[0].description.charAt(0).toUpperCase() +
          weather[0].description.slice(1)}
      </p>
      <p>Feels like: {main.feels_like.toFixed(0)}&deg;C</p>
      <div className="display-column">
        <p>Humidity: {main.humidity}%</p>
        <p>Wind: {wind.speed.toFixed(1)} km/h</p>
      </div>
    </div>
  );
}

export default WeatherDisplay;
