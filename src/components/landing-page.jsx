import React from "react";
import { Link } from "react-router-dom";
import "../styles/landing_page.css";

function LandingPage () {
  return (
    <div className="landing-page">
      <div>
        <img className="landing-img" src={require("../Images/main.png")} alt="land" />
      </div>
      <div className="landing-text">
        <h1 id="text1">10x Team 04</h1>
        <Link to="/postview">
          <button id="text2">Enter</button>
        </Link>
      </div>
    </div>
  );
};
export default LandingPage;
