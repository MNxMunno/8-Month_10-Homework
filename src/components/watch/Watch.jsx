import React from "react";
import Watch1 from "../../assets/images/Apple_watch.png";
import Watch2 from "../../assets/images/Xiaomi_watch.png";
import Watch3 from "../../assets/images/FitBit_watch.png";

const Watch = () => {
  return (
    <section className="watchs">
      <div className="container">
        <div className="watch_cards">
          <div className="watch_card">
            <img src={Watch1} alt="apple" />
            <div className="watch_text">
              <h2>Apple</h2>
              <p>
                Apple is one of the most famous smart watches providing company.
              </p>
            </div>
          </div>
          <div className="watch_card">
            <img src={Watch2} alt="xiaomi" />
            <div className="watch_text">
              <h2>Xiaomi</h2>
              <p>Xiaomi smart watches are produced by MI company.</p>
            </div>
          </div>
          <div className="watch_card">
            <img src={Watch3} alt="fitbit" />
            <div className="watch_text">
              <h2>FitBit</h2>
              <p>
                FitBit smart watches are best for there health and fitness
                features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Watch;
