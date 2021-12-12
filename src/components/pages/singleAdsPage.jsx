import React from "react";
import SidebarProfile from "../sidebarProfile";
import MobileNav from "../common/mobileNav";
import SingleBanner from "../common/singleBanner";
import "../../styles/singleAdsPage.scss";
import CommonCard from "../common/hoc/commonCard";
import * as Fa from "react-icons/fa";
import Slider from "react-slick";
import { userService } from "../../services/userService";

import product1 from "../../images/product/10.jpg";
import product2 from "../../images/product/01.jpg";
import product3 from "../../images/product/08.jpg";
import product4 from "../../images/product/06.jpg";
const SingleAdsPage = ({ isOpenAside, onOpenAside }) => {
  const baseUrl = "../../images/product";
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
  const singleSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  const getSeller = () => {
    return userService[0];
  };
  const seller = getSeller();
  console.log(seller);
  return (
    <div className="Single-ads-page">
      <SidebarProfile isOpenAside={isOpenAside} onOpenAside={onOpenAside} />
      <MobileNav />
      <SingleBanner title="Ad Details" />
      <section class="inner-section ad-details-part">
        <div class="container">
          <div class="row content-reverse">
            <div class="col-lg-4">
              {/* <!-- PRICE CARD --> */}
              <CommonCard cardType="price">
                <h3>
                  $2347<span>/negotiable</span>
                </h3>
                <Fa.FaTags />
              </CommonCard>
              {/* <!-- NUMBER CARD --> */}
              <CommonCard cardType="number">
                <h3>
                  (+880)<span>Click to show</span>
                </h3>
                <Fa.FaPhoneAlt />
              </CommonCard>

              {/* <!-- AUTHOR CARD --> */}
              <div class="common-card">
                <div class="card-header">
                  <h5 class="card-title">author info</h5>
                </div>
                <div class="ad-details-author">
                  <a href="#" class="author-img active">
                    <img src={`../../${seller.img}`} alt="avatar" />
                  </a>
                  <div class="author-meta">
                    <h4>
                      <a href="#">{seller.name}</a>
                    </h4>
                    <h5>joined: {seller.joinedDate}</h5>
                    <p>{seller.bio}</p>
                  </div>
                  <div class="author-widget">
                    <a href="profile.html" title="Profile">
                      <Fa.FaEye />
                    </a>
                    <a href="message.html" title="Message">
                      <Fa.FaEnvelope />
                    </a>
                    <button
                      type="button"
                      title="Follow"
                      class="follow fas fa-heart"
                    ></button>
                    <button
                      type="button"
                      title="Number"
                      data-toggle="modal"
                      data-target="#number"
                    >
                      <Fa.FaPhone />
                    </button>
                    <button
                      type="button"
                      title="Share"
                      data-toggle="modal"
                      data-target="#profile-share"
                    >
                      <Fa.FaShareAlt />
                    </button>
                  </div>
                  <ul class="author-list">
                    <li>
                      <h6>total ads</h6>
                      <p>{seller.ads}</p>
                    </li>
                    <li>
                      <h6>total Follower</h6>
                      <p>{seller.followers.length}</p>
                    </li>
                    <li>
                      <h6>total following</h6>
                      <p>{seller.following.length}</p>
                    </li>
                  </ul>
                </div>
              </div>

              {/* <!-- OPENING CARD --> */}
              <div class="common-card">
                <div class="card-header">
                  <h5 class="card-title">opening hour</h5>
                </div>
                <ul class="ad-details-opening">
                  <li>
                    <h6>Saturday</h6>
                    <p>09:00am - 05:00pm</p>
                  </li>
                  <li>
                    <h6>Sunday</h6>
                    <p>09:00am - 05:00pm</p>
                  </li>
                  <li>
                    <h6>monday</h6>
                    <p>09:00am - 05:00pm</p>
                  </li>
                  <li>
                    <h6>tuesday</h6>
                    <p>09:00am - 05:00pm</p>
                  </li>
                  <li>
                    <h6>wednesday</h6>
                    <p>09:00am - 05:00pm</p>
                  </li>
                  <li>
                    <h6>thursday</h6>
                    <p>09:00am - 05:00pm</p>
                  </li>
                  <li>
                    <h6>friday</h6>
                    <p>closed</p>
                  </li>
                </ul>
              </div>

              {/* <!-- LOCATION CARD --> */}
              <div class="common-card">
                <div class="card-header">
                  <h5 class="card-title">area map</h5>
                </div>
                <iframe
                  class="ad-details-map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.3406974350205!2d90.48469931445422!3d23.663771197998262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b0d5983f048d%3A0x754f30c82bcad3cd!2sJalkuri%20Bus%20Stop!5e0!3m2!1sen!2sbd!4v1610539261654!5m2!1sen!2sbd"
                ></iframe>
              </div>

              {/* <!-- SAFETY CARD --> */}
              <div class="common-card">
                <div class="card-header">
                  <h5 class="card-title">safety tips</h5>
                </div>
                <div class="ad-details-safety">
                  <p>Check the item before you buy</p>
                  <p>Pay only after collecting item</p>
                  <p>Beware of unrealistic offers</p>
                  <p>Meet seller at a safe location</p>
                  <p>Do not make an abrupt decision</p>
                  <p>Be honest with the ad you post</p>
                </div>
              </div>

              {/* <!-- FEATURE CARD --> */}
              <div class="common-card">
                <div class="card-header">
                  <h5 class="card-title">featured ads</h5>
                </div>
                <div class="ad-details-feature slider-arrow">
                  <Slider {...singleSettings}>
                    <div class="feature-card">
                      <a href="#" class="feature-img">
                        <img src="../../images/product/10.jpg" alt="feature" />
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
                        <img src="../../images/product/01.jpg" alt="feature" />
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
                        <img src="../../images/product/08.jpg" alt="feature" />
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
                  </Slider>
                </div>
              </div>
            </div>
            <div class="col-lg-8">
              {/* <!-- AD DETAILS CARD --> */}
              <div class="common-card">
                <ol class="breadcrumb ad-details-breadcrumb">
                  <li>
                    <span class="flat-badge sale">for sale</span>
                  </li>
                  <li class="breadcrumb-item">
                    <a href="#">Property</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    house
                  </li>
                </ol>
                <h5 class="ad-details-address">
                  1420 west jalkuri, shiddirganj, Narayanganj
                </h5>
                <h3 class="ad-details-title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit Maxime
                  ab nesciunt dignissimos.
                </h3>
                <div class="ad-details-meta">
                  <a class="view">
                    <i class="fas fa-eye"></i>
                    <span>
                      <strong>(134)</strong>preview
                    </span>
                  </a>
                  <a class="click">
                    <i class="fas fa-mouse"></i>
                    <span>
                      <strong>(76)</strong>click
                    </span>
                  </a>
                  <a href="#review" class="rating">
                    <i class="fas fa-star"></i>
                    <span>
                      <strong>(29)</strong>review
                    </span>
                  </a>
                </div>
                {/* slider  */}
                {/* slider  */}
                {/* slider  */}
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
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
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
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
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
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
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
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
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
                {/* =============================== */}
                {/* End of slider  */}
                <div class="ad-details-action">
                  <button type="button" class="wish">
                    <i class="fas fa-heart"></i>bookmark
                  </button>
                  <button type="button">
                    <i class="fas fa-exclamation-triangle"></i>report
                  </button>
                  <button
                    type="button"
                    data-toggle="modal"
                    data-target="#ad-share"
                  >
                    <i class="fas fa-share-alt"></i>
                    share
                  </button>
                </div>
              </div>

              {/* <!-- SPECIFICATION CARD --> */}
              <div class="common-card">
                <div class="card-header">
                  <h5 class="card-title">Specification</h5>
                </div>
                <ul class="ad-details-specific">
                  <li>
                    <h6>price:</h6>
                    <p>$2,347</p>
                  </li>
                  <li>
                    <h6>seller type:</h6>
                    <p>personal</p>
                  </li>
                  <li>
                    <h6>published:</h6>
                    <p>february 02, 2021</p>
                  </li>
                  <li>
                    <h6>location:</h6>
                    <p>jalkuri, narayanganj</p>
                  </li>
                  <li>
                    <h6>category:</h6>
                    <p>property</p>
                  </li>
                  <li>
                    <h6>condition:</h6>
                    <p>used</p>
                  </li>
                  <li>
                    <h6>price type:</h6>
                    <p>negotiable</p>
                  </li>
                  <li>
                    <h6>ad type:</h6>
                    <p>sales</p>
                  </li>
                </ul>
              </div>

              {/* <!-- DESCRIPTION CARD --> */}
              <div class="common-card">
                <div class="card-header">
                  <h5 class="card-title">description</h5>
                </div>
                <p class="ad-details-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  magni natus vitae qui perferendis, amet suscipit placeat quas,
                  officia non commodi ipsam consequatur, consectetur similique
                  corrupti rerum. Libero reiciendis laudantium quis? Dolorum
                  numquam illo blanditiis delectus adipisci iure distinctio
                  quibusdam earum quia fuga vero odio omnis exercitationem eius
                  unde fugit rerum architecto autem quos dicta quod ab dolores,
                  neque quae
                </p>
              </div>

              {/* <!-- REVIEWS CARD --> */}
              <div class="common-card" id="review">
                <div class="card-header">
                  <h5 class="card-title">reviews (2)</h5>
                </div>
                <div class="ad-details-review">
                  <ul class="review-list">
                    <li class="review-item">
                      <div class="review-user">
                        <div class="review-head">
                          <div class="review-profile">
                            <a href="#" class="review-avatar">
                              <img
                                src="../../images/avatar/03.jpg"
                                alt="review"
                              />
                            </a>
                            <div class="review-meta">
                              <h6>
                                <a href="#">miron mahmud -</a>
                                <span>June 02, 2020</span>
                              </h6>
                              <ul>
                                <li>
                                  <i class="fas fa-star active"></i>
                                </li>
                                <li>
                                  <i class="fas fa-star active"></i>
                                </li>
                                <li>
                                  <i class="fas fa-star active"></i>
                                </li>
                                <li>
                                  <i class="fas fa-star active"></i>
                                </li>
                                <li>
                                  <i class="fas fa-star active"></i>
                                </li>
                                <li>
                                  <h5>- for delivery system</h5>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <p class="review-desc">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit Non quibusdam harum ipsum dolor cumque quas magni
                          voluptatibus cupiditate minima quis.
                        </p>
                      </div>
                    </li>
                    <li class="review-item">
                      <div class="review-user">
                        <div class="review-head">
                          <div class="review-profile">
                            <a href="#" class="review-avatar">
                              <img
                                src="../../images/avatar/02.jpg"
                                alt="review"
                              />
                            </a>
                            <div class="review-meta">
                              <h6>
                                <a href="#">labonno khan -</a>
                                <span>June 02, 2020</span>
                              </h6>
                              <ul>
                                <li>
                                  <i class="fas fa-star active"></i>
                                </li>
                                <li>
                                  <i class="fas fa-star active"></i>
                                </li>
                                <li>
                                  <i class="fas fa-star active"></i>
                                </li>
                                <li>
                                  <i class="fas fa-star active"></i>
                                </li>
                                <li>
                                  <i class="fas fa-star"></i>
                                </li>
                                <li>
                                  <h5>- for product quality</h5>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <p class="review-desc">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit Non quibusdam harum ipsum dolor cumque quas magni
                          voluptatibus cupiditate minima quis.
                        </p>
                      </div>
                      <div class="review-author">
                        <div class="review-head">
                          <div class="review-profile">
                            <a href="#" class="review-avatar">
                              <img
                                src="../../images/avatar/04.jpg"
                                alt="review"
                              />
                            </a>
                            <div class="review-meta">
                              <h6>
                                <a href="#">Miron Mahmud</a>
                              </h6>
                              <h6>
                                Author - <span>June 02, 2020</span>
                              </h6>
                            </div>
                          </div>
                        </div>
                        <p class="review-desc">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit Non quibusdam harum ipsum dolor cumque quas magni
                          voluptatibus cupiditate minima.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleAdsPage;
