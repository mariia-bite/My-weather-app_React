import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState(" ");
  let [weather, setWeather] = useState({ loaded: false });

  function displayWeather(response) {
    setWeather({
      loaded: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = "97bed167ec49bff56e6c1b63daef9c86";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
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
      <button className="current-location">Your city</button>
    </form>
  );

  if (weather.loaded) {
    return (
      <div className="Weather">
        <div> {form} </div>
        <div className="row">
          <div className="col-4">
            <h1> {city} </h1>
            <h3> Tuesday </h3>
          </div>
          <div className="col-4">
            <ul className="parameters">
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
            <img
              className="main-emoji"
              src={weather.icon}
              alt={weather.description}
              width="80"
            />
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
