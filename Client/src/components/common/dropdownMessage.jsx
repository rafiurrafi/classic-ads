import React from "react";
import $ from "jquery";

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
const DropdownMessage = (props) => {
  return (
    <li className="header-item">
      <button type="button" className="header-widget">
        <i className="fas fa-envelope"></i>
        <sup>0</sup>
      </button>
      <div className="dropdown-card">
        <div className="dropdown-header">
          <h5>message (2)</h5>
          <a href="message.html">view all</a>
        </div>
        <ul className="message-list">
          <li className="message-item unread">
            <a href="message.html" className="message-link">
              <div className="message-img active">
                <img src="images/avatar/01.jpg" alt="avatar" />
              </div>
              <div className="message-text">
                <h6>
                  {" "}
                  = miron mahmud <span>now</span>
                </h6>
                <p>How are you my best frien...</p>
              </div>
              <span className="message-count">4</span>
            </a>
          </li>
          <li className="message-item">
            <a href="message.html" className="message-link">
              <div className="message-img active">
                <img src="images/avatar/03.jpg" alt="avatar" />
              </div>
              <div className="message-text">
                <h6>
                  shipu ahmed <span>3m</span>
                </h6>
                <p>
                  <span>me:</span>How are you my best frien...
                </p>
              </div>
            </a>
          </li>
          <li className="message-item unread">
            <a href="message.html" className="message-link">
              <div className="message-img">
                <img src="images/avatar/02.jpg" alt="avatar" />
              </div>
              <div className="message-text">
                <h6>
                  tahmina bonny <span>2h</span>
                </h6>
                <p>How are you my best frien...</p>
              </div>
              <span className="message-count">12</span>
            </a>
          </li>
          <li className="message-item">
            <a href="message.html" className="message-link">
              <div className="message-img active">
                <img src="images/avatar/04.jpg" alt="avatar" />
              </div>
              <div className="message-text">
                <h6>
                  nasrullah <span>5d</span>
                </h6>
                <p>How are you my best frien...</p>
              </div>
            </a>
          </li>
          <li className="message-item">
            <a href="message.html" className="message-link">
              <div className="message-img">
                <img src="images/user.png" alt="avatar" />
              </div>
              <div className="message-text">
                <h6>
                  saikul azam <span>7w</span>
                </h6>
                <p>
                  <span>me:</span>How are you my best frien...
                </p>
              </div>
            </a>
          </li>
          <li className="message-item">
            <a href="message.html" className="message-link">
              <div className="message-img active">
                <img src="images/avatar/02.jpg" alt="avatar" />
              </div>
              <div className="message-text">
                <h6>
                  munni akter <span>9m</span>
                </h6>
                <p>How are you my best frien...</p>
              </div>
            </a>
          </li>
          <li className="message-item">
            <a href="message.html" className="message-link">
              <div className="message-img active">
                <img src="images/avatar/03.jpg" alt="avatar" />
              </div>
              <div className="message-text">
                <h6>
                  shahin alam <span>1y</span>
                </h6>
                <p>How are you my best frien...</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default DropdownMessage;
