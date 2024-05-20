import React from "react";
import WeatherDetails from "./WeatherDetails";

export default function WeatherSearch() {
  return (
    <div class="WeatherSearch">
      <form>
        <input
          type="search"
          placeholder="Enter a city..."
          required
          class="form-search-input"
        />
        <input type="submit" value="Search" class="form-search-button" />
      </form>
      <WeatherDetails />
    </div>
  );
}
