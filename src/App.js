import React from 'react';
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
       Developed with <span role="img" aria-label="love">❤️</span> by{" "}
        <a target="_blank" href="https://rady.digital">
          Nadim Anwar
        </a>{" "}
     
      </div>
    </React.Fragment>
  );
}

export default App;
