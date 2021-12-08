import React, { useEffect, useState } from "react";
import SidebarProfile from "../sidebarProfile";
import MobileNav from "../common/mobileNav";
import SingleBanner from "../common/singleBanner";
import FilterPrice from "../common/filter/filterPrice";
import FilterType from "../common/filter/filterType";
import FilterRating from "../common/filter/filterRating";
import FilterCities from "../common/filter/filterCities";
import FilterPopularity from "../common/filter/filterPopularity";
import FilterCategory from "../common/filter/filterCategory";
import { productService } from "../../services/product";
import AdListSingle from "../common/adListSingle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Pagination from "../common/pagination";
//in future it will be revisit for performance
const getProductByFilter = (products, pageSubcategory, pageCategory) => {
  if (!pageSubcategory) {
    const filteredProducts = products.filter(
      (product) => product.category === pageCategory
    );
    return filteredProducts;
  } else {
    const filteredProducts = products.filter(
      (product) => product.subcategory === pageSubcategory
    );
    return filteredProducts;
  }
};
const getSpotlight = (products, pageCategory) => {
  const filterSpotlight = products.filter(
    (product) =>
      product.category === pageCategory && product.priceType === "spotlight"
  );
  return filterSpotlight;
};
const AdListPage = (props) => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  const { isOpenAside, onOpenAside, match } = props;
  const { category: pageCategory, subcategory: pageSubcategory } = match.params;
  const [products, setProducts] = useState(() =>
    getProductByFilter(productService, pageSubcategory, pageCategory)
  );
  const [spotlight, setSpotlight] = useState(() =>
    getSpotlight(products, pageCategory)
  );
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 1;

  //handle pagination
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <SidebarProfile isOpenAside={isOpenAside} onOpenAside={onOpenAside} />
      <MobileNav />
      <SingleBanner title="Electronics" />
      <section className="inner-section ad-list-part">
        <div className="container">
          <div className="row content-reverse">
            <div className="col-lg-4 col-xl-3">
              <div className="row">
                <div className="col-md-6 col-lg-12">
                  <FilterPrice />
                </div>
                <div className="col-md-6 col-lg-12">
                  <FilterType />
                </div>
                <div className="col-md-6 col-lg-12">
                  <FilterRating />
                </div>
                <div className="col-md-6 col-lg-12">
                  <FilterCities />
                </div>
                <div className="col-md-6 col-lg-12">
                  <FilterPopularity />
                </div>
                <div className="col-md-6 col-lg-12">
                  <FilterCategory />
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-xl-9">
              <div className="row">
                <div className="col-lg-12">
                  <div className="header-filter">
                    <div className="filter-show">
                      <label className="filter-label">Show :</label>
                      <select className="custom-select filter-select">
                        <option value="1">12</option>
                        <option value="2">24</option>
                        <option value="3">36</option>
                      </select>
                    </div>
                    <div className="filter-short">
                      <label className="filter-label">Short by :</label>
                      <select className="custom-select filter-select">
                        <option selected>default</option>
                        <option value="3">trending</option>
                        <option value="1">featured</option>
                        <option value="2">recommend</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="ad-feature-slider ">
                    <Slider {...settings}>
                      <div className="feature-card">
                        <a href="#!" className="feature-img">
                          <img
                            src="../../images/product/10.jpg"
                            alt="feature"
                          />
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
                            <li
                              className="breadcrumb-item active"
                              aria-current="page"
                            >
                              private car
                            </li>
                          </ol>
                          <h3 className="feature-title">
                            <a href="ad-details-left.html">
                              Unde eveniet ducimus nostrum maiores soluta
                              temporibus ipsum dolor sit amet.
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
                          <img
                            src="../../images/product/01.jpg"
                            alt="feature"
                          />
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
                              <span className="flat-badge booking">
                                booking
                              </span>
                            </li>
                            <li className="breadcrumb-item">
                              <a href="#!">Property</a>
                            </li>
                            <li
                              className="breadcrumb-item active"
                              aria-current="page"
                            >
                              House
                            </li>
                          </ol>
                          <h3 className="feature-title">
                            <a href="ad-details-left.html">
                              Unde eveniet ducimus nostrum maiores soluta
                              temporibus ipsum dolor sit amet.
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
                          <img
                            src="../../images/product/08.jpg"
                            alt="feature"
                          />
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
                            <li
                              className="breadcrumb-item active"
                              aria-current="page"
                            >
                              iphone
                            </li>
                          </ol>
                          <h3 className="feature-title">
                            <a href="ad-details-left.html">
                              Unde eveniet ducimus nostrum maiores soluta
                              temporibus ipsum dolor sit amet.
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
                          <img
                            src="../../images/product/06.jpg"
                            alt="feature"
                          />
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
                            <li
                              className="breadcrumb-item active"
                              aria-current="page"
                            >
                              cycle
                            </li>
                          </ol>
                          <h3 className="feature-title">
                            <a href="ad-details-left.html">
                              Unde eveniet ducimus nostrum maiores soluta
                              temporibus ipsum dolor sit amet.
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
              <div className="row ad-standard">
                {products.map((product, index) => {
                  if (index > 5) return null;
                  return <AdListSingle key={product._id} ads={product} />;
                })}
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="footer-pagection">
                    <p className="page-info">Showing 12 of 60 Results</p>
                    <Pagination
                      itemsCount={products.length}
                      pageSize={pageSize}
                      currentPage={currentPage}
                      onPageChange={handlePageChange}
                    />
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
