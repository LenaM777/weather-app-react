import { React, useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchWeatherData } from "./services/weatherService";
import WeatherDisplay from "./components/WeatherDisplay/WeatherDisplay";
import { GoMoon, GoSun } from "react-icons/go";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleSearch = async (city) => {
    setIsLoading(true);
    setError(null);
    setWeatherData(null);

    try {
      const data = await fetchWeatherData(city);
      setWeatherData(data);
    } catch (err) {
      setError(err.message || "An unknown error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="app">
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === "light" ? (
          <GoMoon className="icon" />
        ) : (
          <GoSun className="icon" />
        )}
      </button>
      <SearchBar onSearch={handleSearch} />
      {isLoading && <p>Loading...</p>}

      {error && <p>{error}</p>}
      {weatherData && !isLoading && !error && (
        <WeatherDisplay data={weatherData} />
      )}
    </div>
  );
};

export default App;
