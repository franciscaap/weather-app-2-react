import React, { useState } from "react";
import axios from "axios";
import WeatherDetails from "./WeatherDetails";
import WeatherForecast from "./WeatherForecast";
import "./WeatherSearch.css";

export default function WeatherSearch(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  function displayWeather(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.temperature.current),
      city: response.data.city,
      country: response.data.country,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      date: new Date(response.data.time * 1000),
    });
  }

  function handleForm(event) {
    event.preventDefault();

    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "9b00a0b2o792ct546c043d35bf49a6e3";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayWeather);
  }
  if (weatherData.ready) {
    return (
      <div className="WeatherSearch">
        <form onSubmit={handleForm}>
          <div className="row">
            <div className="col-md-9">
              <input
                type="search"
                placeholder="Enter a city..."
                required
                className="form-search-input w-100 mt-0"
                onChange={updateCity}
              />
            </div>
            <div className="col-md-3">
              <input
                type="submit"
                value="Search"
                className="form-search-button w-100"
              />
            </div>
          </div>
        </form>
        <WeatherDetails info={weatherData} />
        <WeatherForecast />
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
  } else {
    search();
    return "Loading...";
  }
}
