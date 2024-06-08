import React, { useState } from "react";
import "./CurrentTemperature.css";

export default function CurrentTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return Math.round((props.celsius * 9) / 5 + 32);
  }
  if (unit === "celsius") {
    return (
      <div className="CurrentTemperature">
        <span className="current-temperature-value fw-bold">
          {props.celsius}
        </span>
        <span className="current-temperature-unit fs-2 float-end ms-2">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="CurrentTemperature">
        <span className="current-temperature-value fw-bold">
          {fahrenheit()}
        </span>
        <span className="current-temperature-unit fs-2 float-end ms-2">
          <a href="/" onClick={showCelsius}>
            {" "}
            °C
          </a>{" "}
          | F
        </span>
      </div>
    );
  }
}
