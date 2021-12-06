import React from "react";

const AdListSingle = () => {
  return (
    <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <div class="product-card standard">
        <div class="product-media">
          <div class="product-img">
            <img src="images/product/07.jpg" alt="product" />
          </div>
          <div class="cross-vertical-badge product-badge">
            <i class="fas fa-clipboard-check"></i>
            <span>recommend</span>
          </div>
          <div class="product-type">
            <span class="flat-badge booking">booking</span>
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
        <div class="product-content">
          <ol class="breadcrumb product-category">
            <li>
              <i class="fas fa-tags"></i>
            </li>
            <li class="breadcrumb-item">
              <a href="#!">Luxury</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              resort
            </li>
          </ol>
          <h5 class="product-title">
            <a href="#!">
              Lorem ipsum dolor sit amet consectetur adipisicing odio accusamus
              inventore nobis consequatur ducimus.
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
              $1590<span>/per week</span>
            </h5>
            <div class="product-btn">
              <a
                href="compare.html"
                title="Compare"
                class="fas fa-compress"
              ></a>
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
  );
};

export default AdListSingle;
