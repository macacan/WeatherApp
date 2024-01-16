import React, { useState } from "react";
import DailyForecast from "../Forecast/dailyForecast";
import "../WeatherDisplay/weather.css";
import SearchComponent from "../Search/search";

const Forecast = ({ forecast }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const extractEveryEightItems = (array) => {
    const extractedArray = [];

    for (let i = 7; i < array.length; i += 8) {
      extractedArray.push(array[i]);
    }

    return extractedArray;
  };

  const modifiedForecast = extractEveryEightItems(forecast);

  const getDayOfWeek = (date) => {
    const days = [
      "Söndag",
      "Måndag",
      "Tisdag",
      "Onsdag",
      "Torsdag",
      "Fredag",
      "Lördag",
    ];

    return days[new Date(date).getDay()];
  };

  return (
    <div>
      <button className="btn-Detail" onClick={handleToggleDetails}>
        {showDetails ? "Dölj detaljer" : "Visa detaljer"}
      </button>


      {showDetails && modifiedForecast.length > 0 && (
        <div className="weatherBox">
          {modifiedForecast.map((day) => (
            <div className="dailyForecastContainer" key={day.dt}>
              <DailyForecast
                day={day}
                dayOfWeek={getDayOfWeek(day.dt_txt.slice(0, 10))}
                
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Forecast;
