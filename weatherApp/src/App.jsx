import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const api = {
  key: "db87f278d9f51e2ce2523b851566af30",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, SetWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        SetWeather(result);
        console.log(result);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Väderkoll</h1>

        <div>
          <input
            type="text"
            placeholder="Sök..."
            onChange={(e) => setSearch(e.target.value)}
          />

          <button onClick={searchPressed}>Sök</button>
        </div>
        {weather && weather.name && (
          <div>
            <p>{weather.name}</p>
            <p>{weather.main.temp}°C</p>
            <p>{weather.timezone}</p>

            <div>
              <p>{weather.weather[0].main}</p>
              <p>{weather.weather[0].description}</p>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
