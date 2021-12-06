import React from "react";

const AdListSingle = () => {
  return (
    <div class="feature-card">
      <a href="#!" class="feature-img">
        <img src="images/product/10.jpg" alt="feature" />
      </a>
      <div class="cross-inline-badge feature-badge">
        <span>featured</span>
        <i class="fas fa-book-open"></i>
      </div>
      <button type="button" class="feature-wish">
        <i class="fas fa-heart"></i>
      </button>
      <div class="feature-content">
        <ol class="breadcrumb feature-category">
          <li>
            <span class="flat-badge rent">rent</span>
          </li>
          <li class="breadcrumb-item">
            <a href="#!">automobile</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            private car
          </li>
        </ol>
        <h3 class="feature-title">
          <a href="ad-details-left.html">
            Unde eveniet ducimus nostrum maiores soluta temporibus ipsum dolor
            sit amet.
          </a>
        </h3>
        <div class="feature-meta">
          <span class="feature-price">
            $1200<small>/Monthly</small>
          </span>
          <span class="feature-time">
            <i class="fas fa-clock"></i>56 minute ago
          </span>
        </div>
      </div>
    </div>
  );
};

export default AdListSingle;
