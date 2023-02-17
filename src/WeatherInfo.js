import React from "react";
import CurrentDate from "./CurrentDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-4">
          <h1> {props.data.city} </h1>
          <h3 className="date">
            {" "}
            <CurrentDate date={props.data.date} />{" "}
          </h3>
        </div>
        <div className="col-4">
          <ul className="parameters">
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
        <div className="col-4">
          <h2 className="temperature">
            <WeatherTemperature celsius={props.data.temperature} />
          </h2>
          <div className="description"> {props.data.description} </div>
          <div className="icon">
            <WeatherIcon code={props.data.icon} size={70} />
          </div>
        </div>
      </div>
    </div>
  );
}
