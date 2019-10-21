import React from "react";
import { geolocated } from "react-geolocated";
import logo from "./logo.svg";
import "./App.css";


function userLocation() {
  let positionData = null;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      positionData=position;
      console.log(positionData);
    });
  }
  console.log(positionData);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>User's Location: </h1>
        <p>{positionData}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default userLocation;
