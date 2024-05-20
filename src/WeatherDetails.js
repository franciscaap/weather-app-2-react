import React from "react";

export default function WeatherDetails() {
  return (
    <div className="WeatherDetails">
      <h1>London</h1>
      <h3>United Kingdom</h3>
      <p>
        Monday 14:27 clear sky <br />
        Humidity 50%, Wind:3.6km/h
      </p>
      <img
        src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
        class="current-temperature-icon"
        alt="Icon"
      />
      <div class="current-temperature-value" id="current-temperature-value">
        4
      </div>
      <div class="current-temperature-unit" id="current-temperature-unit">
        °C
      </div>
      <footer>
        Coded by
        <a
          href="https://github.com/franciscaap"
          target="_blank"
          rel="noreferrer"
        >
          Francisca Agyekum Poku
        </a>
        , code hosted on
        <a
          href="https://github.com/franciscaap/weather-ology"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        and website hosted on
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
