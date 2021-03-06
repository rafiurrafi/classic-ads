import React from "react";
import Slider from "react-slick";

import product1 from "../images/product/10.jpg";
import product2 from "../images/product/01.jpg";
import product3 from "../images/product/08.jpg";
import product4 from "../images/product/06.jpg";
import "slick-carousel/slick/slick.css";

// import $ from "jquery";
const FeatureHome = () => {
  const baseUrl = "../images/product";
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function (i) {
      return (
        <a>
          {/* <img src={`${baseUrl}/abstract0${i + 1}.jpg`} /> */}
          <img src={`${baseUrl}/0${i + 1}.jpg`} />
        </a>
      );
    },
  };
  return (
    <section className="section feature-part">
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-lg-5">
            <div className="section-side-heading">
              <h2>
                Find your needs in our best <span>Featured Ads</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit
                aspernatur illum vel sunt libero voluptatum repudiandae veniam
                maxime tenetur fugiat eaque alias nobis doloremque culpa nam.
              </p>
              <a href="ad-list-column3.html" className="btn btn-inline">
                <i className="fas fa-eye"></i>
                <span>view all featured</span>
              </a>
            </div>
          </div>
          <div className="col-md-7 col-lg-7">
            <Slider {...settings}>
              <div className="feature-card">
                <a href="#!" className="feature-img">
                  <img src={product2} alt="feature" />
                </a>
                <div className="cross-inline-badge feature-badge">
                  <span>featured</span>
                  <i className="fas fa-book-open"></i>
                </div>
                <button type="button" className="feature-wish">
                  <i className="fas fa-heart"></i>
                </button>
                <div className="feature-content">
                  <ol className="breadcrumb feature-category">
                    <li>
                      <span className="flat-badge rent">rent</span>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#!">automobile</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      private car
                    </li>
                  </ol>
                  <h3 className="feature-title">
                    <a href="ad-details-left.html">
                      Unde eveniet ducimus nostrum maiores soluta temporibus
                      ipsum dolor sit amet.
                    </a>
                  </h3>
                  <div className="feature-meta">
                    <span className="feature-price">
                      $1200<small>/Monthly</small>
                    </span>
                    <span className="feature-time">
                      <i className="fas fa-clock"></i>56 minute ago
                    </span>
                  </div>
                </div>
              </div>
              <div className="feature-card">
                <a href="#!" className="feature-img">
                  <img src={product1} alt="feature" />
                </a>
                <div className="cross-inline-badge feature-badge">
                  <span>featured</span>
                  <i className="fas fa-book-open"></i>
                </div>
                <button type="button" className="feature-wish">
                  <i className="fas fa-heart"></i>
                </button>
                <div className="feature-content">
                  <ol className="breadcrumb feature-category">
                    <li>
                      <span className="flat-badge booking">booking</span>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#!">Property</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      House
                    </li>
                  </ol>
                  <h3 className="feature-title">
                    <a href="ad-details-left.html">
                      Unde eveniet ducimus nostrum maiores soluta temporibus
                      ipsum dolor sit amet.
                    </a>
                  </h3>
                  <div className="feature-meta">
                    <span className="feature-price">
                      $800<small>/perday</small>
                    </span>
                    <span className="feature-time">
                      <i className="fas fa-clock"></i>56 minute ago
                    </span>
                  </div>
                </div>
              </div>
              <div className="feature-card">
                <a href="#!" className="feature-img">
                  <img src={product3} alt="feature" />
                </a>
                <div className="cross-inline-badge feature-badge">
                  <span>featured</span>
                  <i className="fas fa-book-open"></i>
                </div>
                <button type="button" className="feature-wish">
                  <i className="fas fa-heart"></i>
                </button>
                <div className="feature-content">
                  <ol className="breadcrumb feature-category">
                    <li>
                      <span className="flat-badge sale">sale</span>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#!">gadget</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      iphone
                    </li>
                  </ol>
                  <h3 className="feature-title">
                    <a href="ad-details-left.html">
                      Unde eveniet ducimus nostrum maiores soluta temporibus
                      ipsum dolor sit amet.
                    </a>
                  </h3>
                  <div className="feature-meta">
                    <span className="feature-price">
                      $1150<small>/Negotiable</small>
                    </span>
                    <span className="feature-time">
                      <i className="fas fa-clock"></i>56 minute ago
                    </span>
                  </div>
                </div>
              </div>
              <div className="feature-card">
                <a href="#!" className="feature-img">
                  <img src={product4} alt="feature" />
                </a>
                <div className="cross-inline-badge feature-badge">
                  <span>featured</span>
                  <i className="fas fa-book-open"></i>
                </div>
                <button type="button" className="feature-wish">
                  <i className="fas fa-heart"></i>
                </button>
                <div className="feature-content">
                  <ol className="breadcrumb feature-category">
                    <li>
                      <span className="flat-badge sale">sale</span>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#!">automobile</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      cycle
                    </li>
                  </ol>
                  <h3 className="feature-title">
                    <a href="ad-details-left.html">
                      Unde eveniet ducimus nostrum maiores soluta temporibus
                      ipsum dolor sit amet.
                    </a>
                  </h3>
                  <div className="feature-meta">
                    <span className="feature-price">
                      $455<small>/fixed</small>
                    </span>
                    <span className="feature-time">
                      <i className="fas fa-clock"></i>56 minute ago
                    </span>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHome;
