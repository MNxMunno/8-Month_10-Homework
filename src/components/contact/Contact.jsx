import React from "react";
import Watch from "../../assets/images/Apple1.png";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact_content">
          <div className="contact_cards">
            <div className="contact_card c_card">
              <h6>Subscribe To Newsletter</h6>
              <p>Get free guide about smart watches daily.</p>
              <form className="mail">
                <input type="email" placeholder="Enter Email Address" />
                <a href="#" type="submit" className="btnn">
                  Subscribe
                </a>
              </form>
            </div>
            <div className="contact_card">
              <img src={Watch} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
