import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./components/FrontPage/style.css";
import "./components/inputResult.jsx";
import Box from "./components/Box/Box";
import "./components/Box/Box.css";
import CurrentTime from "./components/Box/time.jsx";


const bakgrund = new URL("../src/assets/bakgrund.avif", import.meta.url);

const api = {
  key: "db87f278d9f51e2ce2523b851566af30",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {

  
  
  const [search, setSearch] = useState("Stockholm");
  const [weather, SetWeather] = useState({});

  const searchPressed = () => {
    fetch(
      `${api.base}weather?q=${search}&lang=SE&units=metric&APPID=${api.key}`
    )
      .then((res) => res.json())
      .then((result) => {
        SetWeather(result);
      });
  };
searchPressed("stockholm")
  return (
    <div className="App">
      <div>
        <img className="bg-img" src={bakgrund} alt="" />
      </div>

      <header className="App-header">
        <h1>Väderkoll</h1>

        <Box
          className="resultBox"
          color="rgba(255, 255, 255, 0.2)"
          borderradius="10px"
        >
          {weather && weather.name && (
            <div>
              <p className="city">{weather.name}</p>
              <p className="temp">{Math.round(weather.main.temp)}°C</p>
              <div>
                <p className="desc">
                  {weather.weather[0].description.charAt(0).toUpperCase() +
                    weather.weather[0].description.slice(1)}
                </p>

                {weather.timezone && (
                  <p>
                    Lokal Tid:{" "}
                    {new Date(Date.now() + weather.timezone * 1000)
                      .toLocaleTimeString([], {
                        timeZone: "UTC",
                        timeZoneName: "short",
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                      .slice(0, -3)}
                  </p>
                )}
                <img
                  className="icon"
                  src={`http://openweathermap.org/img/w/${weather?.weather[0].icon}.png`}
                  alt=""
                />
              </div>
            </div>
          )}
        </Box>

        <div>
          <input
            type="text"
            placeholder="Sök..."
            onChange={(e) => setSearch(e.target.value)}
          />

          <button onClick={searchPressed}>Sök</button>
        </div>
      </header>
    </div>
  );
}

export default App;
