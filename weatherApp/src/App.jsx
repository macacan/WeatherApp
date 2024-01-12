import React, { useState } from "react";
import "./App.css";
import "./components/Box/Box.css";
import SearchComponent from "./components/Search/search";
import WeatherDisplay from "./components/WeatherDisplay/weather";


const api = {
  key: "db87f278d9f51e2ce2523b851566af30",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [weather, setWeather] = useState({});

  const searchWeather = (query) => {
    fetch(`${api.base}weather?q=${query}&lang=SE&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <div className="container">
      <SearchComponent onSearch={searchWeather} />
      <header className="App-header">
        <h1>Väderkoll</h1>
        <WeatherDisplay weather={weather} />
      </header>
    </div>
  );
}

export default App;
