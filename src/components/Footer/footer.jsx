import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="col-lg-3 col-sm-6">
          <div className="single-box">
            <img src="" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem sed sapiente ea quidem veritatis. Facere dolores ipsam
              at? Consequatur, maxime.
            </p>
            <h3>We Accept</h3>   
            <div className="card-area">
              <i className="fa fa-cc-visa"></i>
              <i className="fa fa-cc-visa"></i>
              <i className="fa fa-cc-visa"></i>
              <i className="fa fa-cc-visa"></i>
            </div>
          </div>
        </div>
        <div className="col-lg--3 col-sm-6">
          <div className="single-box">
            <h2>News Letter</h2>

            <div className="input-group mb-3">
              <input
                type="text"
                className="form-contriol"
                placeholder="Enter your email ..."
                aria-label="Recipient's username"
              />
              <span className="input-group-text" id="basic-addon">
                <i className="fa fa-long-arrow-right"></i>
              </span>
            </div>
            <h2>Follow us on</h2>
            <p className="socials">
              <i className="fa fa-facebook"></i>
              <i className="fa fa-instegram"></i>
              <i className="fa fa-twitter"></i>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
