import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState(" ");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=97bed167ec49bff56e6c1b63daef9c86&units=metric`;
    axios.get(url).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        onChange={updateCity}
        placeholder="Enter your city"
        autoFocus="on"
        className="input-city"
      />
      <input type="submit" value="Search" className="search-button" />
      <button>Your city</button>
    </form>
  );

  if (loaded) {
    return (
      <div className="Weather">
        <div> {form} </div>
        <div className="row">
          <div className="col-4">
            <h1> {city} </h1>
            <h3> Tuesday </h3>
          </div>
          <div className="col-4">
            <ul>
              <li>Humidity: {weather.humidity} %</li>
              <li>Wind: {weather.wind} km/h</li>
            </ul>
          </div>
          <div className="col-4">
            <h2>
              {Math.round(weather.temperature)}
              <a className="active units" href="/">
                °C
              </a>
              /
              <a className="units" href="/">
                °F{" "}
              </a>
            </h2>
            <div className="description"> {weather.description} </div>
            <img src={weather.icon} alt={weather.description} width="80" />
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}