import React from "react";
import Weather from "./Weather.js";
import Forecast from "./Forecast.js";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <Forecast />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/mariia-velykoridko/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mariia Velykoridko
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/mariia-bite/My-weather-app_React"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
