import React from "react";

const DailyForecast = ({ day, dayOfWeek }) => {
  return (
    <div className="dailyForecastBox">
      <p className="day">{dayOfWeek}</p>
      <p className="temp">{Math.round(day.main.temp)}°C</p>
      <p className="desc">
        {day.weather[0].description.charAt(0).toUpperCase() +
          day.weather[0].description.slice(1)}
      </p>
      <p>Min {Math.round(day.main.temp_min)} °C</p>
      <p>Max {Math.round(day.main.temp_max)} °C</p>
      <img
              className="icon"
              src={`http://openweathermap.org/img/w/${day?.weather[0].icon}.png`}
              alt=""
            />
    </div>
  );
};

export default DailyForecast;