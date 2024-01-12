import React from "react";
import ResultBox from "../Box/Box";

const WeatherDisplay = ({ weather }) => {
  return (
    <ResultBox
      className="resultBox"
      color="rgba(255, 255, 255, 0.2)"
      borderradius="10px"
    >
      {" "}
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
    </ResultBox>
  );
};

export default WeatherDisplay;
