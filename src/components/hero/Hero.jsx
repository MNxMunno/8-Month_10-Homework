import React from "react";
import heroImg from "../../assets/images/hero_img.png";
const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="nav_hero">
          <div className="hero_cards">
            <div className="hero_card h_card">
              <h1>
                Discover <br />
                Most Suitable <br />
                Watches
              </h1>
              <p>
                Find the best, reliable, and cheap smart watches here. <br />
                We focus on product quality. Here you can find smart <br />
                watches of almost all brands. So why you are waiting? <br />
                Just order now!
              </p>
              <div className="search">
                <input
                  type="text"
                  name="text"
                  id="text"
                  placeholder="Find the best brands"
                />
                <button>Search</button>
              </div>
            </div>
            <div className="hero_card">
              <img src={heroImg} alt="hero_watch" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
