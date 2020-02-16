import React from "react";
import Slideshow from "../components/SlideShow";
import "./index.css";

const LandingPage = () => {
  return (
    <>
      <div className="wrapper">
        <Slideshow />
        <div className="overlap_panel"></div>
      </div>
    </>
  );
};

export default LandingPage;
