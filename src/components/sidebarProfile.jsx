import React from "react";

const SidebarProfile = ({ isOpenAside, onOpenAside }) => {
  return (
    <aside className={`sidebar-part ${isOpenAside && "active"}`}>
      <div className="sidebar-body">
        <div className="sidebar-header">
          <a href="index.html" className="sidebar-logo">
            <img src="images/logo.png" alt="logo" />
          </a>
          <button className="sidebar-cross" onClick={onOpenAside}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="sidebar-content">
          <div className="sidebar-profile">
            <a href="#!" className="sidebar-avatar">
              <img src="images/avatar/01.jpg" alt="avatar" />
            </a>
            <h4>
              <a href="#!" className="sidebar-name">
                Jackon Honson
              </a>
            </h4>
            <a href="ad-post.html" className="btn btn-inline sidebar-post">
              <i className="fas fa-plus-circle"></i>
              <span>post your ad</span>
            </a>
          </div>
          <div className="sidebar-menu">
            <ul className="nav nav-tabs">
              <li>
                <a
                  href="#main-menu"
                  className="nav-link active"
                  data-toggle="tab"
                >
                  Main Menu
                </a>
              </li>
              <li>
                <a href="#author-menu" className="nav-link" data-toggle="tab">
                  Author Menu
                </a>
              </li>
            </ul>

            <div className="tab-pane active" id="main-menu">
              <ul className="navbar-list">
                <li className="navbar-item">
                  <a className="navbar-link" href="index.html">
                    Home
                  </a>
                </li>
                <li className="navbar-item navbar-dropdown">
                  <a className="navbar-link" href="#!">
                    <span>Categories</span>
                    <i className="fas fa-plus"></i>
                  </a>
                  <ul className="dropdown-list">
                    <li>
                      <a className="dropdown-link" href="category-list.html">
                        category list
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-link" href="category-details.html">
                        category details
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="navbar-item navbar-dropdown">
                  <a className="navbar-link" href="#!">
                    <span>Advertise List</span>
                    <i className="fas fa-plus"></i>
                  </a>
                  <ul className="dropdown-list">
                    <li>
                      <a className="dropdown-link" href="ad-list-column3.html">
                        ad list column 3
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-link" href="ad-list-column2.html">
                        ad list column 2
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-link" href="ad-list-column1.html">
                        ad list column 1
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="navbar-item navbar-dropdown">
                  <a className="navbar-link" href="#!">
                    <span>Advertise details</span>
                    <i className="fas fa-plus"></i>
                  </a>
                  <ul className="dropdown-list">
                    <li>
                      <a className="dropdown-link" href="ad-details-grid.html">
                        ad details grid
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-link" href="ad-details-left.html">
                        ad details left
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-link" href="ad-details-right.html">
                        ad details right
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="navbar-item navbar-dropdown">
                  <a className="navbar-link" href="#!">
                    <span>Pages</span>
                    <i className="fas fa-plus"></i>
                  </a>
                  <ul className="dropdown-list">
                    <li>
                      <a className="dropdown-link" href="about.html">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-link" href="compare.html">
                        Ad Compare
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-link" href="cities.html">
                        Ad by Cities
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-link" href="price.html">
                        Pricing Plan
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-link" href="user-form.html">
                        User Form
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-link" href="404.html">
                        404
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="navbar-item navbar-dropdown">
                  <a className="navbar-link" href="#!">
                    <span>blogs</span>
                    <i className="fas fa-plus"></i>
                  </a>
                  <ul className="dropdown-list">
                    <li>
                      <a className="dropdown-link" href="blog-list.html">
                        Blog list
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-link" href="blog-details.html">
                        blog details
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="navbar-item">
                  <a className="navbar-link" href="contact.html">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="tab-pane" id="author-menu">
              <ul className="navbar-list">
                <li className="navbar-item">
                  <a className="navbar-link" href="dashboard.html">
                    Dashboard
                  </a>
                </li>
                <li className="navbar-item">
                  <a className="navbar-link" href="profile.html">
                    Profile
                  </a>
                </li>
                <li className="navbar-item">
                  <a className="navbar-link" href="ad-post.html">
                    Ad Post
                  </a>
                </li>
                <li className="navbar-item">
                  <a className="navbar-link" href="my-ads.html">
                    My Ads
                  </a>
                </li>
                <li className="navbar-item">
                  <a className="navbar-link" href="setting.html">
                    Settings
                  </a>
                </li>
                <li className="navbar-item navbar-dropdown">
                  <a className="navbar-link" href="bookmark.html">
                    <span>bookmark</span>
                    <span>0</span>
                  </a>
                </li>
                <li className="navbar-item navbar-dropdown">
                  <a className="navbar-link" href="message.html">
                    <span>Message</span>
                    <span>0</span>
                  </a>
                </li>
                <li className="navbar-item navbar-dropdown">
                  <a className="navbar-link" href="notification.html">
                    <span>Notification</span>
                    <span>0</span>
                  </a>
                </li>
                <li className="navbar-item">
                  <a className="navbar-link" href="user-form.html">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="sidebar-footer">
            <p>
              All Rights Reserved By <a href="#!">Classicads</a>
            </p>
            <p>
              Developed By{" "}
              <a href="https://themeforest.net/user/mironcoder">Mironcoder</a>
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SidebarProfile;
