import React from "react";
import "./WeatherDetails.css";

export default function WeatherDetails(props) {
  return (
    <div className="WeatherDetails">
      <div className="current-weather d-flex justify-content-between">
        <div>
          <h1 className="current-city">{props.info.city}</h1>
          <h3 className="country">{props.info.country}</h3>
          <p className="current-details">
            <span className="current-time" id="time">
              Saturday 21:40,
            </span>
            <span id="description"> {props.info.description}</span>
            <br />
            <span id="temperature-details">
              Humidity: <strong id="humidity">{props.info.humidity}%</strong>,
              Wind:
              <strong id="wind"> {props.info.wind}km/h</strong>
            </span>
          </p>
        </div>
        <div className="current-temperature d-flex">
          <div>
            <div id="icon">
              <img
                src={props.info.icon}
                className="current-temperature-icon"
                alt="Icon"
              />
            </div>
          </div>
          <div
            className="current-temperature-value fw-bold"
            id="current-temperature-value"
          >
            {props.info.temperature}
          </div>
          <div
            className="current-temperature-unit"
            id="current-temperature-unit"
          >
            °C
          </div>
        </div>
      </div>
      <footer className="text-center">
        Coded by{" "}
        <a
          href="https://github.com/franciscaap"
          target="_blank"
          rel="noreferrer"
        >
          Francisca Agyekum Poku
        </a>
        , code hosted on{" "}
        <a
          href="https://github.com/franciscaap/weather-app-2-react"
          target="_blank"
          rel="noreferrer"
        >
          GitHub{" "}
        </a>
        and website hosted on{" "}
        <a
          href="https://weatherology-app-react.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify.
        </a>
      </footer>
    </div>
  );
}
