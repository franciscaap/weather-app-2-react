import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast ms-4 text-center">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Tue</div>
          <div className="WeatherForecast-imoji">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
              alt="weather imoji"
            />
          </div>
          <span className="WeatherForecast-min-temp pe-2">10°</span>{" "}
          <span className="WeatherForecast-max-temp ps-2">18°</span>
        </div>
      </div>
    </div>
  );
}
