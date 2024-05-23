import React from "react";
import "./WeatherDetails.css";

export default function WeatherDetails(props) {
  return (
    <div className="WeatherDetails">
      <div className="row mt-2">
        <div className="col-md-6">
          <h1 className="current-city">{props.info.city}</h1>
          <h3 className="country">{props.info.country}</h3>
          <p className="current-details">
            <span className="current-time">Saturday 21:40,</span>
            <span> {props.info.description}</span>
            <br />
            <span className="temperature-details">
              Humidity: <strong>{props.info.humidity}%</strong>, Wind:
              <strong> {props.info.wind}km/h</strong>
            </span>
          </p>
        </div>
        <div className="col-md-6">
          <div className="current-temperature">
            <div className=" d-flex">
              <div>
                <div>
                  <img
                    src={props.info.icon}
                    className="current-temperature-icon"
                    alt="Icon"
                  />
                </div>
              </div>
              <div className="current-temperature-value fw-bold">
                {props.info.temperature}
              </div>
              <div className="current-temperature-unit">°C</div>
            </div>
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
