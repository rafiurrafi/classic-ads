import React from "react";
import SidebarProfile from "../sidebarProfile";
import MobileNav from "../common/mobileNav";
import SingleBanner from "../common/singleBanner";
import FilterPrice from "../common/filter/filterPrice";
import FilterType from "../common/filter/filterType";
import FilterRating from "../common/filter/filterRating";
import FilterCities from "../common/filter/filterCities";
import FilterPopularity from "../common/filter/filterPopularity";
import FilterCategory from "../common/filter/filterCategory";
const AdListPage = ({ isOpenAside, onOpenAside }) => {
  return (
    <div>
      <SidebarProfile isOpenAside={isOpenAside} onOpenAside={onOpenAside} />
      <MobileNav />
      <SingleBanner title="Electronics" />
      <section class="inner-section ad-list-part">
        <div class="container">
          <div class="row content-reverse">
            <div class="col-lg-4 col-xl-3">
              <div class="row">
                <div class="col-md-6 col-lg-12">
                  <FilterPrice />
                </div>
                <div class="col-md-6 col-lg-12">
                  <FilterType />
                </div>
                <div class="col-md-6 col-lg-12">
                  <FilterRating />
                </div>
                <div class="col-md-6 col-lg-12">
                  <FilterCities />
                </div>
                <div class="col-md-6 col-lg-12">
                  <FilterPopularity />
                </div>
                <div class="col-md-6 col-lg-12">
                  <FilterCategory />
                </div>
              </div>
            </div>
            <div class="col-lg-8 col-xl-9">
              <div class="row">
                <div class="col-lg-12">
                  <div class="header-filter">
                    <div class="filter-show">
                      <label class="filter-label">Show :</label>
                      <select class="custom-select filter-select">
                        <option value="1">12</option>
                        <option value="2">24</option>
                        <option value="3">36</option>
                      </select>
                    </div>
                    <div class="filter-short">
                      <label class="filter-label">Short by :</label>
                      <select class="custom-select filter-select">
                        <option selected>default</option>
                        <option value="3">trending</option>
                        <option value="1">featured</option>
                        <option value="2">recommend</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="ad-feature-slider slider-arrow">
                    <div class="feature-card">
                      <a href="#" class="feature-img">
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
                            <a href="#">automobile</a>
                          </li>
                          <li
                            class="breadcrumb-item active"
                            aria-current="page"
                          >
                            private car
                          </li>
                        </ol>
                        <h3 class="feature-title">
                          <a href="ad-details-left.html">
                            Unde eveniet ducimus nostrum maiores soluta
                            temporibus ipsum dolor sit amet.
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
                    <div class="feature-card">
                      <a href="#" class="feature-img">
                        <img src="images/product/01.jpg" alt="feature" />
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
                            <span class="flat-badge booking">booking</span>
                          </li>
                          <li class="breadcrumb-item">
                            <a href="#">Property</a>
                          </li>
                          <li
                            class="breadcrumb-item active"
                            aria-current="page"
                          >
                            House
                          </li>
                        </ol>
                        <h3 class="feature-title">
                          <a href="ad-details-left.html">
                            Unde eveniet ducimus nostrum maiores soluta
                            temporibus ipsum dolor sit amet.
                          </a>
                        </h3>
                        <div class="feature-meta">
                          <span class="feature-price">
                            $800<small>/perday</small>
                          </span>
                          <span class="feature-time">
                            <i class="fas fa-clock"></i>56 minute ago
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="feature-card">
                      <a href="#" class="feature-img">
                        <img src="images/product/08.jpg" alt="feature" />
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
                            <span class="flat-badge sale">sale</span>
                          </li>
                          <li class="breadcrumb-item">
                            <a href="#">gadget</a>
                          </li>
                          <li
                            class="breadcrumb-item active"
                            aria-current="page"
                          >
                            iphone
                          </li>
                        </ol>
                        <h3 class="feature-title">
                          <a href="ad-details-left.html">
                            Unde eveniet ducimus nostrum maiores soluta
                            temporibus ipsum dolor sit amet.
                          </a>
                        </h3>
                        <div class="feature-meta">
                          <span class="feature-price">
                            $1150<small>/Negotiable</small>
                          </span>
                          <span class="feature-time">
                            <i class="fas fa-clock"></i>56 minute ago
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="feature-card">
                      <a href="#" class="feature-img">
                        <img src="images/product/06.jpg" alt="feature" />
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
                            <span class="flat-badge sale">sale</span>
                          </li>
                          <li class="breadcrumb-item">
                            <a href="#">automobile</a>
                          </li>
                          <li
                            class="breadcrumb-item active"
                            aria-current="page"
                          >
                            cycle
                          </li>
                        </ol>
                        <h3 class="feature-title">
                          <a href="ad-details-left.html">
                            Unde eveniet ducimus nostrum maiores soluta
                            temporibus ipsum dolor sit amet.
                          </a>
                        </h3>
                        <div class="feature-meta">
                          <span class="feature-price">
                            $455<small>/fixed</small>
                          </span>
                          <span class="feature-time">
                            <i class="fas fa-clock"></i>56 minute ago
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row ad-standard">
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
                          <a href="#">Luxury</a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">
                          resort
                        </li>
                      </ol>
                      <h5 class="product-title">
                        <a href="#">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          odio accusamus inventore nobis consequatur ducimus.
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
                <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <div class="product-card standard">
                    <div class="product-media">
                      <div class="product-img">
                        <img src="images/product/08.jpg" alt="product" />
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
                    <div class="product-content">
                      <ol class="breadcrumb product-category">
                        <li>
                          <i class="fas fa-tags"></i>
                        </li>
                        <li class="breadcrumb-item">
                          <a href="#">gadget</a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">
                          mobile
                        </li>
                      </ol>
                      <h5 class="product-title">
                        <a href="#">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          odio accusamus inventore nobis consequatur ducimus.
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
                          $454<span>/fixed</span>
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
                <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <div class="product-card standard">
                    <div class="product-media">
                      <div class="product-img">
                        <img src="images/product/10.jpg" alt="product" />
                      </div>
                      <div class="cross-vertical-badge product-badge">
                        <i class="fas fa-bolt"></i>
                        <span>trending</span>
                      </div>
                      <div class="product-type">
                        <span class="flat-badge rent">rent</span>
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
                          <a href="#">automobile</a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">
                          private car
                        </li>
                      </ol>
                      <h5 class="product-title">
                        <a href="#">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          odio accusamus inventore nobis consequatur ducimus.
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
                          $768<span>/per month</span>
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
                <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <div class="product-card standard">
                    <div class="product-media">
                      <div class="product-img">
                        <img src="images/product/11.jpg" alt="product" />
                      </div>
                      <div class="cross-vertical-badge product-badge">
                        <i class="fas fa-bolt"></i>
                        <span>trending</span>
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
                          <a href="#">Luxury</a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">
                          Duplex house
                        </li>
                      </ol>
                      <h5 class="product-title">
                        <a href="#">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          odio accusamus inventore nobis consequatur ducimus.
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
                          $1470<span>/per day</span>
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
                <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <div class="product-card standard">
                    <div class="product-media">
                      <div class="product-img">
                        <img src="images/product/14.jpg" alt="product" />
                      </div>
                      <div class="cross-vertical-badge product-badge">
                        <i class="fas fa-fire"></i>
                        <span>top niche</span>
                      </div>
                      <div class="product-type">
                        <span class="flat-badge rent">rent</span>
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
                          <a href="#">automobile</a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">
                          bike
                        </li>
                      </ol>
                      <h5 class="product-title">
                        <a href="#">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          odio accusamus inventore nobis consequatur ducimus.
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
                          $90<span>/per hour</span>
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
                <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <div class="product-card standard">
                    <div class="product-media">
                      <div class="product-img">
                        <img src="images/product/15.jpg" alt="product" />
                      </div>
                      <div class="cross-vertical-badge product-badge">
                        <i class="fas fa-fire"></i>
                        <span>top niche</span>
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
                    <div class="product-content">
                      <ol class="breadcrumb product-category">
                        <li>
                          <i class="fas fa-tags"></i>
                        </li>
                        <li class="breadcrumb-item">
                          <a href="#">gadget</a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">
                          camera
                        </li>
                      </ol>
                      <h5 class="product-title">
                        <a href="#">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          odio accusamus inventore nobis consequatur ducimus.
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
                          $1200<span>/Negotiable</span>
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
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="footer-pagection">
                    <p class="page-info">Showing 12 of 60 Results</p>
                    <ul class="pagination">
                      <li class="page-item">
                        <a class="page-link" href="#">
                          <i class="fas fa-long-arrow-alt-left"></i>
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link active" href="#">
                          1
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li class="page-item">...</li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          67
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          <i class="fas fa-long-arrow-alt-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdListPage;
