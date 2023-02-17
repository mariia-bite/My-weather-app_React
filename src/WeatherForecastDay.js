import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="future-days">
      <div> {day()}</div>
      <div>
        <WeatherIcon code={props.data.weather[0].icon} size={36} />
      </div>{" "}
      <br />
      <div className="weather-forecast-temperature">
        {" "}
        <span className="min-temp"> {minTemperature()} </span>
        <span className="max-temp"> {maxTemperature()} </span>
      </div>
    </div>
  );
}
