import React from "react";
import Search from "./common/search";
import logo from "../images/logo.png";
import user from "../images/user.png";
import "../styles/header.scss";
import "../styles/dropdown-cart.scss";
import DropdownMessage from "./common/dropdownMessage";
import { Link } from "react-router-dom";
import * as Fa from "react-icons/fa";
function Header(props) {
  const { onOpenAside } = props;
  return (
    <header className="header-part">
      <div className="container">
        <div className="header-content">
          <div className="header-left">
            <button
              type="button"
              className="header-widget sidebar-btn"
              onClick={onOpenAside}
            >
              <Fa.FaAlignLeft />
            </button>
            <Link to="/" className="header-logo">
              <img src={logo} alt="logo" />
            </Link>
            <a href="user-form.html" className="header-widget header-user">
              <img src={user} alt="user" />
              <span>join me</span>
            </a>
            <button type="button" className="header-widget search-btn">
              <Fa.FaSearch />
            </button>
          </div>
          <Search />
          <div className="header-right">
            <ul className="header-list">
              <li className="header-item">
                <a href="bookmark.html" className="header-widget">
                  <i>
                    <Fa.FaHeart />
                  </i>
                  <sup>0</sup>
                </a>
              </li>
              <DropdownMessage />
              <li className="header-item">
                <button type="button" className="header-widget">
                  <i>
                    <Fa.FaBell />
                  </i>
                  <sup>0</sup>
                </button>
                <div className="dropdown-card">
                  <div className="dropdown-header">
                    <h5>Notification (1)</h5>
                    <a href="notification.html">view all</a>
                  </div>
                  <ul className="notify-list">
                    <li className="notify-item active">
                      <a href="#" className="notify-link">
                        <div className="notify-img">
                          <img src="images/avatar/01.jpg" alt="avatar" />
                        </div>
                        <div className="notify-content">
                          <p className="notify-text">
                            <span>miron mahmud</span> has added the
                            advertisement post of your <span>booking</span> to
                            his wishlist.
                          </p>
                          <span className="notify-time">just now</span>
                        </div>
                      </a>
                    </li>
                    <li className="notify-item">
                      <a href="#" className="notify-link">
                        <div className="notify-img">
                          <img src="images/avatar/02.jpg" alt="avatar" />
                        </div>
                        <div className="notify-content">
                          <p className="notify-text">
                            <span>tahmina bonny</span> gave you a{" "}
                            <span>comment</span> and 5 star <span>review.</span>
                          </p>
                          <span className="notify-time">2 hours ago</span>
                        </div>
                      </a>
                    </li>
                    <li className="notify-item">
                      <a href="#" className="notify-link">
                        <div className="notify-img">
                          <img src="images/avatar/03.jpg" alt="avatar" />
                        </div>
                        <div className="notify-content">
                          <p className="notify-text">
                            <span>shipu ahmed</span> and <span>4 other</span>{" "}
                            have seen your contact number
                          </p>
                          <span className="notify-time">3 minutes ago</span>
                        </div>
                      </a>
                    </li>
                    <li className="notify-item">
                      <a href="#" className="notify-link">
                        <div className="notify-img">
                          <img src="images/avatar/02.jpg" alt="avatar" />
                        </div>
                        <div className="notify-content">
                          <p className="notify-text">
                            <span>miron mahmud</span> has added the
                            advertisement post of your <span>booking</span> to
                            his wishlist.
                          </p>
                          <span className="notify-time">5 days ago</span>
                        </div>
                      </a>
                    </li>
                    <li className="notify-item">
                      <a href="#" className="notify-link">
                        <div className="notify-img">
                          <img src="images/avatar/04.jpg" alt="avatar" />
                        </div>
                        <div className="notify-content">
                          <p className="notify-text">
                            <span>labonno khan</span> gave you a{" "}
                            <span>comment</span> and 5 star <span>review.</span>
                          </p>
                          <span className="notify-time">4 months ago</span>
                        </div>
                      </a>
                    </li>
                    <li className="notify-item">
                      <a href="#" className="notify-link">
                        <div className="notify-img">
                          <img src="images/avatar/01.jpg" alt="avatar" />
                        </div>
                        <div className="notify-content">
                          <p className="notify-text">
                            <span>azam khan</span> and <span>4 other</span> have
                            seen your contact number
                          </p>
                          <span className="notify-time">1 years ago</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <a href="ad-post.html" className="btn btn-inline post-btn">
              <i className="fas fa-plus-circle"></i>
              <span>post your ad</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
