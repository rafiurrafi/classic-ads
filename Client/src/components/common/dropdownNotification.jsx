import React from "react";
import $ from "jquery";
const DropdownNotification = (props) => {
  // ====================================================
  //functionality comes from dropdown message jquery
  // ====================================================
  $(".header-widget").on("click", function () {
    $(this).next(".dropdown-card").slideToggle();

    var dropdownCard = $(this).next(".dropdown-card");
    if ($(".dropdown-card:visible")) {
      $(".dropdown-card").hide();
      dropdownCard.show();
    } else if ($(".dropdown-card:hidden")) {
      dropdownCard.show();
    }
  });
  return (
    <li className="header-item">
      <button type="button" className="header-widget">
        <i className="fas fa-bell"></i>
        <sup>0</sup>
      </button>
      <div className="dropdown-card">
        <div className="dropdown-header">
          <h5>Notification (1)</h5>
          <a href="notification.html">view all</a>
        </div>
        <ul className="notify-list">
          <li className="notify-item active">
            <a href="#!" className="notify-link">
              <div className="notify-img">
                <img src="images/avatar/01.jpg" alt="avatar" />
              </div>
              <div className="notify-content">
                <p className="notify-text">
                  <span>miron mahmud</span> has added the advertisement post of
                  your <span>booking</span> to his wishlist.
                </p>
                <span className="notify-time">just now</span>
              </div>
            </a>
          </li>
          <li className="notify-item">
            <a href="#!" className="notify-link">
              <div className="notify-img">
                <img src="images/avatar/02.jpg" alt="avatar" />
              </div>
              <div className="notify-content">
                <p className="notify-text">
                  <span>tahmina bonny</span> gave you a <span>comment</span> and
                  5 star <span>review.</span>
                </p>
                <span className="notify-time">2 hours ago</span>
              </div>
            </a>
          </li>
          <li className="notify-item">
            <a href="#!" className="notify-link">
              <div className="notify-img">
                <img src="images/avatar/03.jpg" alt="avatar" />
              </div>
              <div className="notify-content">
                <p className="notify-text">
                  <span>shipu ahmed</span> and <span>4 other</span> have seen
                  your contact number
                </p>
                <span className="notify-time">3 minutes ago</span>
              </div>
            </a>
          </li>
          <li className="notify-item">
            <a href="#!" className="notify-link">
              <div className="notify-img">
                <img src="images/avatar/02.jpg" alt="avatar" />
              </div>
              <div className="notify-content">
                <p className="notify-text">
                  <span>miron mahmud</span> has added the advertisement post of
                  your <span>booking</span> to his wishlist.
                </p>
                <span className="notify-time">5 days ago</span>
              </div>
            </a>
          </li>
          <li className="notify-item">
            <a href="#!" className="notify-link">
              <div className="notify-img">
                <img src="images/avatar/04.jpg" alt="avatar" />
              </div>
              <div className="notify-content">
                <p className="notify-text">
                  <span>labonno khan</span> gave you a <span>comment</span> and
                  5 star <span>review.</span>
                </p>
                <span className="notify-time">4 months ago</span>
              </div>
            </a>
          </li>
          <li className="notify-item">
            <a href="#!" className="notify-link">
              <div className="notify-img">
                <img src="images/avatar/01.jpg" alt="avatar" />
              </div>
              <div className="notify-content">
                <p className="notify-text">
                  <span>azam khan</span> and <span>4 other</span> have seen your
                  contact number
                </p>
                <span className="notify-time">1 years ago</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default DropdownNotification;
