import React from "react";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  function minimumTemp() {
    let minimumTemp = Math.round(props.data.temperature.minimum);
    return `${minimumTemp}°`;
  }

  function maximumTemp() {
    let maximumTemp = Math.round(props.data.temperature.maximum);
    return `${maximumTemp}°`;
  }

  function icon() {
    let icon = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.data.condition.icon}.png`;
    return icon;
  }

  return (
    <div>
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
      <span className="WeatherForecast-min-temp pe-2">{minimumTemp()}</span>{" "}
      <span className="WeatherForecast-max-temp ps-2">{maximumTemp()}</span>
    </div>
  );
}
