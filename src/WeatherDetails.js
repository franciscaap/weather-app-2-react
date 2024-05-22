import React from "react";
import "./WeatherDetails.css";

export default function WeatherDetails() {
  return (
    <div className="WeatherDetails">
      <div class="current-weather d-flex justify-content-between">
        <div>
          <h1 className="current-city">London</h1>
          <h3 className="country">United Kingdom</h3>
          <p class="current-details">
            <span class="current-time" id="time">
              Saturday 21:40
            </span>
            <span id="description">Cloudy</span>
            <br />
            <span id="temperature-details">
              Humidity <strong id="humidity">62%</strong>, Wind:
              <strong id="wind">22km/h</strong>
            </span>
          </p>
        </div>
        <div class="current-temperature d-flex">
          <div>
            <div id="icon">
              <img
                src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
                className="current-temperature-icon"
                alt="Icon"
              />
            </div>
          </div>
          <div
            class="current-temperature-value fw-bold"
            id="current-temperature-value"
          >
            4
          </div>
          <div class="current-temperature-unit" id="current-temperature-unit">
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
          href="https://github.com/franciscaap/weather-ology"
          target="_blank"
          rel="noreferrer"
        >
          GitHub{" "}
        </a>
        and website hosted on{" "}
        <a
          href="https://weatherology-app.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify.
        </a>
      </footer>
    </div>
  );
}
