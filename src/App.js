import WeatherSearch from "./WeatherSearch";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <WeatherSearch defaultCity="London" />
      </div>
    </div>
  );
}

export default App;
