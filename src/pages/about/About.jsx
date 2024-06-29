import React from "react";
import Img1 from "../../assets/images/hamza.png";
import Img2 from "../../assets/images/star.svg";
import Img3 from "../../assets/images/hafiz.png";
import Img4 from "../../assets/images/Dots.svg";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about_content">
          <p className="a-text">Here are our some of the best clients.</p>
          <h5>What People Say About Us</h5>
          <div className="about_cards">
            <div className="about_card">
              <img src={Img1} alt="hamza" />
              <div className="about_text">
                <h6>Hamza Faizi</h6>
                <p className="a_text">
                  Don’t waste time, just order! This is the best website to
                  puschase smart watches.
                </p>
                <img src={Img2} alt="star" className="stars" />
              </div>
            </div>
            <div className="about_card">
              <img src={Img3} alt="hafiz" />
              <div className="about_text">
                <h6>Hafiz Huzaifa</h6>
                <p className="a_text">
                  I’ve been purchasing smart watches of Mohid for a long time.
                  All the products are good quality.
                </p>
                <img src={Img2} alt="star" className="stars" />
              </div>
            </div>
          </div>
          <div className="dots">
            <img src={Img4} alt="dots" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
