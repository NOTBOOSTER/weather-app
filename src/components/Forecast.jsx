import axios from "axios";
import { useEffect, useState } from "react";

const Forecast = ({forecastData}) => {
  const weeks = (weekday) => {
    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return weekdays[weekday];
  }

  return (<div className="flex justify-center items-center p-4 flex-wrap">
  {forecastData.map((item) => (
      <div key={item.dt} className="flex items-center justify-center flex-col shadow-inner shadow-gray-600 m-2 w-24 h-24 rounded-md">
        <h3 className="font-mono">{weeks(new Date(item.dt * 1000).getDay())}</h3>
        <p className="font-bold">{item.main.temp_max}°C</p>
        <p className="font-light">{item.weather[0].main}</p>
      </div>
    ))}
    </div>
  );
};

export default Forecast;
