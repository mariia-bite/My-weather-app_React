import React from "react";
import CurrentDate from "./CurrentDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-4">
          <h1> {props.data.city} </h1>
          <h3>
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
          <h2>
            {Math.round(props.data.temperature)}
            <a className="active units" href="/">
              °C
            </a>
            /
            <a className="units" href="/">
              °F{" "}
            </a>
          </h2>
          <div className="description"> {props.data.description} </div>
          <img
            className="main-emoji"
            src={props.data.icon}
            alt={props.data.description}
            width="80"
          />
        </div>
      </div>
    </div>
  );
}
