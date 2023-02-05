import React from "react";
import { createRoot } from "react-dom/client";

import "./App.css";

import Weather from "./Weather.js";
import Forecast from "./Forecast.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
function App() {
  return (
    <div className="App">
      <Weather />
      <Forecast />
    </div>
  );
}
