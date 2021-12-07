import React from "react";
const Footer = () => {
  return (
    <footer className="footer-part">
      <div className="container">
        <div className="row newsletter">
          <div className="col-lg-6">
            <div className="news-content">
              <h2>Subscribe for Latest Offers</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laboriosam, aliquid reiciendis! Exercitationem soluta provident
                non.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <form className="news-form">
              <input type="text" placeholder="Enter Your Email Address" />
              <button className="btn btn-inline">
                <i className="fas fa-envelope"></i>
                <span>Subscribe</span>
              </button>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="footer-content">
              <h3>Contact Us</h3>
              <ul className="footer-address">
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <p>
                    1420 West Jalkuri Fatullah, <span>Narayanganj, BD</span>
                  </p>
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  <p>
                    support@classicads.com <span>info@classicads.com</span>
                  </p>
                </li>
                <li>
                  <i className="fas fa-phone-alt"></i>
                  <p>
                    +8801838288389 <span>+8801941101915</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="footer-content">
              <h3>Quick Links</h3>
              <ul className="footer-widget">
                <li>
                  <a href="#!">Store Location</a>
                </li>
                <li>
                  <a href="#!">Orders Tracking</a>
                </li>
                <li>
                  <a href="#!">My Account</a>
                </li>
                <li>
                  <a href="#!">Size Guide</a>
                </li>
                <li>
                  <a href="#!">Faq</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="footer-content">
              <h3>Information</h3>
              <ul className="footer-widget">
                <li>
                  <a href="#!">About Us</a>
                </li>
                <li>
                  <a href="#!">Delivery System</a>
                </li>
                <li>
                  <a href="#!">Secure Payment</a>
                </li>
                <li>
                  <a href="#!">Contact Us</a>
                </li>
                <li>
                  <a href="#!">Sitemap</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="footer-info">
              <a href="#!">
                <img src="images/logo.png" alt="logo" />
              </a>
              <ul className="footer-count">
                <li>
                  <h5>929,238</h5>
                  <p>Registered Users</p>
                </li>
                <li>
                  <h5>242,789</h5>
                  <p>Community Ads</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-card-content">
              <div className="footer-payment">
                <a href="#!">
                  <img src="images/pay-card/01.jpg" alt="01" />
                </a>
                <a href="#!">
                  <img src="images/pay-card/02.jpg" alt="02" />
                </a>
                <a href="#!">
                  <img src="images/pay-card/03.jpg" alt="03" />
                </a>
                <a href="#!">
                  <img src="images/pay-card/04.jpg" alt="04" />
                </a>
              </div>
              <div className="footer-option">
                <button
                  type="button"
                  data-toggle="modal"
                  data-target="#language"
                >
                  <i className="fas fa-globe"></i>English
                </button>
                <button
                  type="button"
                  data-toggle="modal"
                  data-target="#currency"
                >
                  <i className="fas fa-dollar-sign"></i>USD
                </button>
              </div>
              <div className="footer-app">
                <a href="#!">
                  <img src="images/play-store.png" alt="play-store" />
                </a>
                <a href="#!">
                  <img src="images/app-store.png" alt="app-store" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-end">
        <div className="container">
          <div className="footer-end-content">
            <p>
              All Copyrights Reserved &copy; 2021 - Developed by{" "}
              <a href="#!">Mironcoder</a>
            </p>
            <ul className="footer-social">
              <li>
                <a href="#!">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fab fa-google-plus-g"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fab fa-pinterest-p"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fab fa-dribbble"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
