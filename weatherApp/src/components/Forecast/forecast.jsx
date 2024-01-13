import React from "react";
import ForecastBox from "../Box/forecastBox";
import "../WeatherDisplay/weather.css";

const Forecast = ({ weather }) => {
  return (
    <ForecastBox>
      {" "}
      {weather && weather.name && (
        <div className="weatherBox">
          <p className="city">{weather.name}</p>
          <p className="temp">{Math.round(weather.main.temp)}°C</p>
          <p className="desc">
            {weather.weather[0].description.charAt(0).toUpperCase() +
              weather.weather[0].description.slice(1)}
          </p>
          <div>
            {weather.timezone && (
              <p className="time">
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
    </ForecastBox>
  );
};

export default Forecast;
