import React from "react";
import Search from "./common/search";
import logo from "../images/logo.png";
import user from "../images/user.png";
import "../styles/header.scss";
import "../styles/dropdown-cart.scss";
import DropdownMessage from "./common/dropdownMessage";
function Header(props) {
  const { onOpenAside } = props;
  return (
    <header class="header-part">
      <div class="container">
        <div class="header-content">
          <div class="header-left">
            <button
              type="button"
              class="header-widget sidebar-btn"
              onClick={onOpenAside}
            >
              <i class="fas fa-align-left"></i>
            </button>
            <a href="index.html" class="header-logo">
              <img src={logo} alt="logo" />
            </a>
            <a href="user-form.html" class="header-widget header-user">
              <img src={user} alt="user" />
              <span>join me</span>
            </a>
            <button type="button" class="header-widget search-btn">
              <i class="fas fa-search"></i>
            </button>
          </div>
          <Search />
          <div class="header-right">
            <ul class="header-list">
              <li class="header-item">
                <a href="bookmark.html" class="header-widget">
                  <i class="fas fa-heart"></i>
                  <sup>0</sup>
                </a>
              </li>
              <DropdownMessage />
              <li class="header-item">
                <button type="button" class="header-widget">
                  <i class="fas fa-bell"></i>
                  <sup>0</sup>
                </button>
                <div class="dropdown-card">
                  <div class="dropdown-header">
                    <h5>Notification (1)</h5>
                    <a href="notification.html">view all</a>
                  </div>
                  <ul class="notify-list">
                    <li class="notify-item active">
                      <a href="#" class="notify-link">
                        <div class="notify-img">
                          <img src="images/avatar/01.jpg" alt="avatar" />
                        </div>
                        <div class="notify-content">
                          <p class="notify-text">
                            <span>miron mahmud</span> has added the
                            advertisement post of your <span>booking</span> to
                            his wishlist.
                          </p>
                          <span class="notify-time">just now</span>
                        </div>
                      </a>
                    </li>
                    <li class="notify-item">
                      <a href="#" class="notify-link">
                        <div class="notify-img">
                          <img src="images/avatar/02.jpg" alt="avatar" />
                        </div>
                        <div class="notify-content">
                          <p class="notify-text">
                            <span>tahmina bonny</span> gave you a{" "}
                            <span>comment</span> and 5 star <span>review.</span>
                          </p>
                          <span class="notify-time">2 hours ago</span>
                        </div>
                      </a>
                    </li>
                    <li class="notify-item">
                      <a href="#" class="notify-link">
                        <div class="notify-img">
                          <img src="images/avatar/03.jpg" alt="avatar" />
                        </div>
                        <div class="notify-content">
                          <p class="notify-text">
                            <span>shipu ahmed</span> and <span>4 other</span>{" "}
                            have seen your contact number
                          </p>
                          <span class="notify-time">3 minutes ago</span>
                        </div>
                      </a>
                    </li>
                    <li class="notify-item">
                      <a href="#" class="notify-link">
                        <div class="notify-img">
                          <img src="images/avatar/02.jpg" alt="avatar" />
                        </div>
                        <div class="notify-content">
                          <p class="notify-text">
                            <span>miron mahmud</span> has added the
                            advertisement post of your <span>booking</span> to
                            his wishlist.
                          </p>
                          <span class="notify-time">5 days ago</span>
                        </div>
                      </a>
                    </li>
                    <li class="notify-item">
                      <a href="#" class="notify-link">
                        <div class="notify-img">
                          <img src="images/avatar/04.jpg" alt="avatar" />
                        </div>
                        <div class="notify-content">
                          <p class="notify-text">
                            <span>labonno khan</span> gave you a{" "}
                            <span>comment</span> and 5 star <span>review.</span>
                          </p>
                          <span class="notify-time">4 months ago</span>
                        </div>
                      </a>
                    </li>
                    <li class="notify-item">
                      <a href="#" class="notify-link">
                        <div class="notify-img">
                          <img src="images/avatar/01.jpg" alt="avatar" />
                        </div>
                        <div class="notify-content">
                          <p class="notify-text">
                            <span>azam khan</span> and <span>4 other</span> have
                            seen your contact number
                          </p>
                          <span class="notify-time">1 years ago</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <a href="ad-post.html" class="btn btn-inline post-btn">
              <i class="fas fa-plus-circle"></i>
              <span>post your ad</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
