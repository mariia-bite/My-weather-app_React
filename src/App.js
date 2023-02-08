import React from "react";
import Weather from "./Weather.js";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        Нехай проблеми та негоди не роблять вам в житті погоди!
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
          <div className="image-weather">
            <img src="src/weather-girl.svg" width="100" alt="weather-girl" />
          </div>
        </footer>
      </div>
    </div>
  );
}
