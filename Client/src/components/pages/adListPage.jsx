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
import { paginate } from "../../utils/paginatie";
import FilterSorting from "../common/filter/filterSorting";

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
    infinite: true,
    slidesToShow: 1,
    speed: 1000,
    // autoplay: true,
    autoplaySpeed: 2000,
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
  //filter items
  const [priceRange, setPriceRange] = useState([]);
  const [isSorted, setIsSorted] = useState("");
  const [bookingType, setBookingType] = useState([]);

  //handle pagination
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  //helper functions
  const handlePriceRange = (range) => {
    setPriceRange(range);
    setCurrentPage(1);
  };
  const handleSorting = (sort) => {
    setIsSorted(sort);
  };
  const handleFilterType = (type) => {
    setBookingType(type);
  };

  //filter using price
  let filteredProducts = [...products];
  if (priceRange.length > 0)
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );
  //filter using ascending/descending
  if (!!isSorted && isSorted === "asc")
    filteredProducts.sort((a, b) => a.price - b.price);
  else if (!!isSorted && isSorted === "desc")
    filteredProducts.sort((a, b) => -a.price + b.price);
  //filter using booking type
  if (bookingType.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      bookingType.includes(product.status)
    );
  }

  // paginate item
  let productsToDisplay = paginate(filteredProducts, currentPage, pageSize);
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
                  <FilterPrice onPriceChage={handlePriceRange} />
                </div>
                <div className="col-md-6 col-lg-12">
                  <FilterType onType={handleFilterType} />
                </div>
                <div className="col-md-6 col-lg-12">
                  <FilterSorting onAsc={handleSorting} />
                </div>
                <div className="col-md-6 col-lg-12">
                  <FilterRating />
                </div>
                <div className="col-md-6 col-lg-12">
                  <FilterCities products={filteredProducts} />
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
                  {/* <div className="ad-feature-slider ">
                    <Slider {...settings}>
                      {spotlight.map((light) => (
                        <div key={light._id} className="feature-card">
                          <a href="#!" className="feature-img">
                            <img src={`../../${light.img}`} alt="feature" />
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
                                ${light.price}
                                <small>/Monthly</small>
                              </span>
                              <span className="feature-time">
                                <i className="fas fa-clock"></i>
                                {light.time} minute ago
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div> */}
                </div>
              </div>
              <div className="row ad-standard">
                {productsToDisplay.map((product) => (
                  <AdListSingle key={product._id} ads={product} />
                ))}
              </div>
              {!!filteredProducts.length && (
                <div className="row">
                  <div className="col-lg-12">
                    <div className="footer-pagection">
                      <p className="page-info">
                        Showing {pageSize} of {filteredProducts.length} Results
                      </p>
                      <Pagination
                        itemsCount={filteredProducts.length}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdListPage;
