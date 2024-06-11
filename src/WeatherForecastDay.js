import React from "react";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  function minimumTemp() {
    let minimumTemp = Math.round(props.data.temp.min);
    return `${minimumTemp}°`;
  }

  function maximumTemp() {
    let maximumTemp = Math.round(props.data.temp.max);
    return `${maximumTemp}°`;
  }

  function icon() {
    let icon = `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
    return icon;
  }

  return (
    <div>
      <div className="WeatherForecast ms-4 text-center">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">{day()} </div>
            <div
              className="WeatherForecast-icon
            "
            >
              <img
                src={icon()}
                alt="weather icon
              "
              />
            </div>
            <span className="WeatherForecast-min-temp pe-2">
              {minimumTemp()}
            </span>{" "}
            <span className="WeatherForecast-max-temp ps-2">
              {maximumTemp()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
