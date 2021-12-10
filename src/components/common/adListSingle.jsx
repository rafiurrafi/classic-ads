import React from "react";

const AdListSingle = ({ ads }) => {
  return (
    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <div className="product-card standard">
        <div className="product-media">
          <div className="product-img">
            <img src={`../../../${ads.img}`} alt="product" />
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
              <a href="#!">{ads.category}</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {ads.subcategory}
            </li>
          </ol>
          <h5 className="product-title">
            <a href="#!">
              Lorem ipsum dolor sit amet consectetur adipisicing odio accusamus
              inventore nobis consequatur ducimus.
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
              ${ads.price}
              <span>/per week</span>
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
    </div>
  );
};

export default AdListSingle;
