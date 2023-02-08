import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ loaded: false });

  function displayWeather(response) {
    setWeather({
      loaded: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "97bed167ec49bff56e6c1b63daef9c86";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
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
        <WeatherInfo data={weather} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
