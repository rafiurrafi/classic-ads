import React from "react";
import { products } from "../services/product";
const Recommended = () => {
  return (
    <section className="section recomend-part">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-center-heading">
              <h2>
                Our Featured <span>Ads</span>
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
            <div className="product-card">
              {products.map((product) => (
                <div className="row mb-5 product-card-inner" key={product._id}>
                  <div className="col-md-5 col-lg-4">
                    <div className="product-media">
                      <div className="product-img">
                        <img src={product.img} alt="product" />
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
                  </div>
                  <div className="col-md-7 col-lg-8 product-content-container">
                    <div className="product-content">
                      <ol className="breadcrumb product-category">
                        <li>
                          <i className="fas fa-tags"></i>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#!">stationary</a>
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
                          <a href="compare.html" title="Compare">
                            <i className="fas fa-compress"></i>
                          </a>
                          <button
                            type="button"
                            title="Wishlist"
                            className="far fa-heart"
                          ></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
