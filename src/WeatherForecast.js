import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function WeatherForecastResponse(response) {}

  let apiKey = "1fd8093fa5ff12d796d7de756cc9d6b9";
  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(WeatherForecastResponse);

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
