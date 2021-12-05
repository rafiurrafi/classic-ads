import React from "react";
import Slider from "react-slick";
import { products } from "../services/product";
import "slick-carousel/slick/slick.css";
const Recommended = () => {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="section recomend-part">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-center-heading">
              <h2>
                Our Recommend <span>Ads</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit
                aspernatur illum vel sunt libero voluptatum repudiandae veniam
                maxime tenetur.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="recomend-slider slider-arrow">
              <Slider {...settings}>
                <div className="product-card ">
                  <div className="product-media">
                    <div className="product-img">
                      <img src="images/product/01.jpg" alt="product" />
                    </div>
                    <div className="cross-vertical-badge product-badge">
                      <i className="fas fa-clipboard-check"></i>
                      <span>recommend</span>
                    </div>
                    <div className="product-type">
                      <span className="flat-badge booking">booking</span>
                    </div>
                    <ul className="product-action">
                      <li className="view">
                        <i className="fas fa-eye"></i>
                        <span>264</span>
                      </li>
                      <li className="click">
                        <i className="fas fa-mouse"></i>
                        <span>134</span>
                      </li>
                      <li className="rating">
                        <i className="fas fa-star"></i>
                        <span>4.5/7</span>
                      </li>
                    </ul>
                  </div>
                  <div className="product-content">
                    <ol className="breadcrumb product-category">
                      <li>
                        <i className="fas fa-tags"></i>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Luxury</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Duplex House
                      </li>
                    </ol>
                    <h5 className="product-title">
                      <a href="ad-details-left.html">
                        Lorem ipsum dolor sit amet consect adipisicing elit
                      </a>
                    </h5>
                    <div className="product-meta">
                      <span>
                        <i className="fas fa-map-marker-alt"></i>Uttara, Dhaka
                      </span>
                      <span>
                        <i className="fas fa-clock"></i>30 min ago
                      </span>
                    </div>
                    <div className="product-info">
                      <h5 className="product-price">
                        $1500<span>/Per Day</span>
                      </h5>
                      <div className="product-btn">
                        <a
                          href="compare.html"
                          title="Compare"
                          className="fas fa-compress"
                        ></a>
                        <button
                          type="button"
                          title="Wishlist"
                          className="far fa-heart"
                        ></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-card">
                  <div className="product-media">
                    <div className="product-img">
                      <img src="images/product/03.jpg" alt="product" />
                    </div>
                    <div className="cross-vertical-badge product-badge">
                      <i className="fas fa-clipboard-check"></i>
                      <span>recommend</span>
                    </div>
                    <div className="product-type">
                      <span className="flat-badge sale">sale</span>
                    </div>
                    <ul className="product-action">
                      <li className="view">
                        <i className="fas fa-eye"></i>
                        <span>264</span>
                      </li>
                      <li className="click">
                        <i className="fas fa-mouse"></i>
                        <span>134</span>
                      </li>
                      <li className="rating">
                        <i className="fas fa-star"></i>
                        <span>4.5/7</span>
                      </li>
                    </ul>
                  </div>
                  <div className="product-content">
                    <ol className="breadcrumb product-category">
                      <li>
                        <i className="fas fa-tags"></i>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">stationary</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        books
                      </li>
                    </ol>
                    <h5 className="product-title">
                      <a href="ad-details-left.html">
                        Lorem ipsum dolor sit amet consect adipisicing elit
                      </a>
                    </h5>
                    <div className="product-meta">
                      <span>
                        <i className="fas fa-map-marker-alt"></i>Uttara, Dhaka
                      </span>
                      <span>
                        <i className="fas fa-clock"></i>30 min ago
                      </span>
                    </div>
                    <div className="product-info">
                      <h5 className="product-price">
                        $470<span>/fixed</span>
                      </h5>
                      <div className="product-btn">
                        <a
                          href="compare.html"
                          title="Compare"
                          className="fas fa-compress"
                        ></a>
                        <button
                          type="button"
                          title="Wishlist"
                          className="far fa-heart"
                        ></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-card">
                  <div className="product-media">
                    <div className="product-img">
                      <img src="images/product/10.jpg" alt="product" />
                    </div>
                    <div className="cross-vertical-badge product-badge">
                      <i className="fas fa-clipboard-check"></i>
                      <span>recommend</span>
                    </div>
                    <div className="product-type">
                      <span className="flat-badge rent">rent</span>
                    </div>
                    <ul className="product-action">
                      <li className="view">
                        <i className="fas fa-eye"></i>
                        <span>264</span>
                      </li>
                      <li className="click">
                        <i className="fas fa-mouse"></i>
                        <span>134</span>
                      </li>
                      <li className="rating">
                        <i className="fas fa-star"></i>
                        <span>4.5/7</span>
                      </li>
                    </ul>
                  </div>
                  <div className="product-content">
                    <ol className="breadcrumb product-category">
                      <li>
                        <i className="fas fa-tags"></i>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">automobile</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        private car
                      </li>
                    </ol>
                    <h5 className="product-title">
                      <a href="ad-details-left.html">
                        Lorem ipsum dolor sit amet consect adipisicing elit
                      </a>
                    </h5>
                    <div className="product-meta">
                      <span>
                        <i className="fas fa-map-marker-alt"></i>Uttara, Dhaka
                      </span>
                      <span>
                        <i className="fas fa-clock"></i>30 min ago
                      </span>
                    </div>
                    <div className="product-info">
                      <h5 className="product-price">
                        $3300<span>/per month</span>
                      </h5>
                      <div className="product-btn">
                        <a
                          href="compare.html"
                          title="Compare"
                          className="fas fa-compress"
                        ></a>
                        <button
                          type="button"
                          title="Wishlist"
                          className="far fa-heart"
                        ></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-card">
                  <div className="product-media">
                    <div className="product-img">
                      <img src="images/product/09.jpg" alt="product" />
                    </div>
                    <div className="cross-vertical-badge product-badge">
                      <i className="fas fa-clipboard-check"></i>
                      <span>recommend</span>
                    </div>
                    <div className="product-type">
                      <span className="flat-badge sale">sale</span>
                    </div>
                    <ul className="product-action">
                      <li className="view">
                        <i className="fas fa-eye"></i>
                        <span>264</span>
                      </li>
                      <li className="click">
                        <i className="fas fa-mouse"></i>
                        <span>134</span>
                      </li>
                      <li className="rating">
                        <i className="fas fa-star"></i>
                        <span>4.5/7</span>
                      </li>
                    </ul>
                  </div>
                  <div className="product-content">
                    <ol className="breadcrumb product-category">
                      <li>
                        <i className="fas fa-tags"></i>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">animals</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        cat
                      </li>
                    </ol>
                    <h5 className="product-title">
                      <a href="ad-details-left.html">
                        Lorem ipsum dolor sit amet consect adipisicing elit
                      </a>
                    </h5>
                    <div className="product-meta">
                      <span>
                        <i className="fas fa-map-marker-alt"></i>Uttara, Dhaka
                      </span>
                      <span>
                        <i className="fas fa-clock"></i>30 min ago
                      </span>
                    </div>
                    <div className="product-info">
                      <h5 className="product-price">
                        $900<span>/Negotiable</span>
                      </h5>
                      <div className="product-btn">
                        <a
                          href="compare.html"
                          title="Compare"
                          className="fas fa-compress"
                        ></a>
                        <button
                          type="button"
                          title="Wishlist"
                          className="far fa-heart"
                        ></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-card">
                  <div className="product-media">
                    <div className="product-img">
                      <img src="images/product/02.jpg" alt="product" />
                    </div>
                    <div className="cross-vertical-badge product-badge">
                      <i className="fas fa-clipboard-check"></i>
                      <span>recommend</span>
                    </div>
                    <div className="product-type">
                      <span className="flat-badge sale">sale</span>
                    </div>
                    <ul className="product-action">
                      <li className="view">
                        <i className="fas fa-eye"></i>
                        <span>264</span>
                      </li>
                      <li className="click">
                        <i className="fas fa-mouse"></i>
                        <span>134</span>
                      </li>
                      <li className="rating">
                        <i className="fas fa-star"></i>
                        <span>4.5/7</span>
                      </li>
                    </ul>
                  </div>
                  <div className="product-content">
                    <ol className="breadcrumb product-category">
                      <li>
                        <i className="fas fa-tags"></i>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">fashion</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        shoes
                      </li>
                    </ol>
                    <h5 className="product-title">
                      <a href="ad-details-left.html">
                        Lorem ipsum dolor sit amet consect adipisicing elit
                      </a>
                    </h5>
                    <div className="product-meta">
                      <span>
                        <i className="fas fa-map-marker-alt"></i>Uttara, Dhaka
                      </span>
                      <span>
                        <i className="fas fa-clock"></i>30 min ago
                      </span>
                    </div>
                    <div className="product-info">
                      <h5 className="product-price">
                        $384<span>/fixed</span>
                      </h5>
                      <div className="product-btn">
                        <a
                          href="compare.html"
                          title="Compare"
                          className="fas fa-compress"
                        ></a>
                        <button
                          type="button"
                          title="Wishlist"
                          className="far fa-heart"
                        ></button>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="center-50">
              <a href="ad-list-column3.html" className="btn btn-inline">
                <i className="fas fa-eye"></i>
                <span>view all recommend</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommended;
