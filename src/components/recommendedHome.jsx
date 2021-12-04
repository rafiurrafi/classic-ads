import React from "react";
import product2 from "../images/product/10.jpg";
import product3 from "../images/product/03.jpg";
import product4 from "../images/product/09.jpg";
import product5 from "../images/product/02.jpg";

const Recommended = () => {
  const products = [
    {
      _id: 1,
      img: "images/product/01.jpg",
    },
    {
      _id: 2,
      img: product2,
    },
    {
      _id: 3,
      img: product3,
    },
    {
      _id: 4,
      img: product4,
    },
    {
      _id: 5,
      img: product5,
    },
  ];
  console.log(products);
  return (
    <section class="section recomend-part">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-center-heading">
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
        <div class="row">
          <div class="col-lg-12">
            <div class="product-card">
              {products.map((product) => (
                <div className="row mb-5" key={product._id}>
                  <div class="col-md-5 col-lg-4">
                    <div class="product-media">
                      <div class="product-img">
                        <img src={product.img} alt="product" />
                      </div>
                      <div class="cross-vertical-badge product-badge">
                        <i class="fas fa-clipboard-check"></i>
                        <span>recommend</span>
                      </div>
                      <div class="product-type">
                        <span class="flat-badge sale">sale</span>
                      </div>
                      <ul class="product-action">
                        <li class="view">
                          <i class="fas fa-eye"></i>
                          <span>264</span>
                        </li>
                        <li class="click">
                          <i class="fas fa-mouse"></i>
                          <span>134</span>
                        </li>
                        <li class="rating">
                          <i class="fas fa-star"></i>
                          <span>4.5/7</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-7 col-lg-8">
                    <div class="product-content">
                      <ol class="breadcrumb product-category">
                        <li>
                          <i class="fas fa-tags"></i>
                        </li>
                        <li class="breadcrumb-item">
                          <a href="#">stationary</a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">
                          books
                        </li>
                      </ol>
                      <h5 class="product-title">
                        <a href="ad-details-left.html">
                          Lorem ipsum dolor sit amet consect adipisicing elit
                        </a>
                      </h5>
                      <div class="product-meta">
                        <span>
                          <i class="fas fa-map-marker-alt"></i>Uttara, Dhaka
                        </span>
                        <span>
                          <i class="fas fa-clock"></i>30 min ago
                        </span>
                      </div>
                      <div class="product-info">
                        <h5 class="product-price">
                          $470<span>/fixed</span>
                        </h5>
                        <div class="product-btn">
                          <a href="compare.html" title="Compare">
                            <i class="fas fa-compress"></i>
                          </a>
                          <button
                            type="button"
                            title="Wishlist"
                            class="far fa-heart"
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
        <div class="row">
          <div class="col-lg-12">
            <div class="center-50">
              <a href="ad-list-column3.html" class="btn btn-inline">
                <i class="fas fa-eye"></i>
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
