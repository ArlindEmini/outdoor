import React from "react";

import { BiWorld } from "react-icons/all";
import "./Testimonial.scss";

const Testimonial = () => {
  return (
    <div className="testimonial-box">
      <div className="icon">
        <BiWorld />
      </div>
      <h3>Explore the world</h3>
      <p className="testimonial-text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi iste
        eveniet quaerat accusamus,
      </p>
    </div>
  );
};

export default Testimonial;
