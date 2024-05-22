import React from "react";

import WeatherDetails from "./WeatherDetails";
import "./WeatherSearch.css";

export default function WeatherSearch() {
  return (
    <div class="WeatherSearch">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              required
              className="form-search-input w-100 mt-0"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="form-search-button w-100"
            />
          </div>
        </div>
      </form>
      <WeatherDetails />
    </div>
  );
}
