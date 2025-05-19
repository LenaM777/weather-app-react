import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = (city) => {
    console.log("Searching for city:", city);
  };

  return (
    <div className="app">
      <h1>Weather</h1>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
};

export default App;
