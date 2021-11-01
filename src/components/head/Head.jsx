import React from "react";

import logoWhite from "../../assets/logo-white.png";

import AOS from "aos";
import "aos/dist/aos.css";

import "./Head.scss";

export const Head = () => {
  AOS.init({
    duration: "2000",
  });
  return (
    <div className="head">
      <div className="outdoor">
        <div className="logo-box">
          <img src={logoWhite} alt="logo" className="logo" />
        </div>
        <div className="text-box">
          <h1 className="heading-primary">
            <span data-aos="fade-right" className="heading-primary-main">
              Outdoors
            </span>
            <span data-aos="fade-left" className="heading-primary-sub">
              is where life happens
            </span>
          </h1>
          <button className="button btn-white">Discover our Tours</button>
        </div>
      </div>
    </div>
  );
};
