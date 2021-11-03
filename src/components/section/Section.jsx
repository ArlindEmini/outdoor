import React from "react";

import "./Section.scss";

import photo1 from "../../assets/nat-1-large.jpg";
import photo2 from "../../assets/nat-2-large.jpg";
import photo3 from "../../assets/nat-3-large.jpg";

const Section = () => {
  return (
    <div className="section">
      <h1 className="section__h2secondary">
        Exciting tours for adventurous people
      </h1>
      <div className="exciting_tours">
        <div className="text_about">
          <h3 className="heading_tertiary">
            Your're going to fall in love with nature
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil est
            et sequi ad quisquam, praesentium obcaecati! Sequi delectus, qui rem
            sit quia laborum minus obcaecati accusamus quibusdam, nam error
            officia?
          </p>
          <h3 className="heading_tertiary">
            Live your adventures like you never have before
          </h3>
          <p className="paragraph">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
            sed quidem similique. Accusantium, non sapiente? Nihil repudiandae
            fugit veniam sunt fuga quo dolorem, nobis tempore officiis aliquid
            ad temporibus id?
          </p>
          <button className="btn_more">Learn more</button>
        </div>
        <div className="images_right">
          Image composition
          <div className="threeimages">
            <img src={photo1} alt="photo1" className="photo p1" />
            <img src={photo2} alt="photo2" className="photo p2" />
            <img src={photo3} alt="photo3" className="photo p3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
