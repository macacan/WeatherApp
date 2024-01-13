import React, { useState, useEffect } from "react";
import "./App.css";
import SearchComponent from "./components/Search/search";
import WeatherDisplay from "./components/WeatherDisplay/weather";
import Forecast from "./components/Forecast/forecast";

const api = {
  key: "db87f278d9f51e2ce2523b851566af30",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [weather, setWeather] = useState({});
  const [search, setSearch] = useState("Stockholm");

  const searchWeather = (query) => {
    fetch(`${api.base}weather?q=${query}&lang=SE&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        // console.log(result);
      });
  };

  const searchForecast = (query) => {
    fetch(`${api.base}forecast?q=${query}&lang=SE&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
       // console.log(result);
      });
  };

  useEffect(() => {
    searchWeather(search);
  }, [search]);

  return (
    <div className="container">
      <header className="App-header">
        <h1>Väderkoll</h1>
        <WeatherDisplay weather={weather} />
        <h4>Mer Information</h4>
        <Forecast weather={weather} />

        <SearchComponent onSearch={setSearch} />
      </header>
      
    </div>
  );
}

export default App;
