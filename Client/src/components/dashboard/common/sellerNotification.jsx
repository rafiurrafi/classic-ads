import React from "react";
import "../../../styles/seller/sellerNotification.scss";
import * as Fa from "react-icons/fa";
const SellerNotification = () => {
  return (
    <section class="notify-part">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 mx-auto">
            <div class="notify-body">
              <div class="notify-filter">
                <select class="select notify-select">
                  <option value="">all notification</option>
                  <option value="">read notification</option>
                  <option value="">unread notification</option>
                </select>
                <div class="notify-action">
                  <a href="#" title="Delete All">
                    <Fa.FaTrashAlt />
                  </a>
                  <a href="#" title="Mark All As Read">
                    <Fa.FaEnvelopeOpen />
                  </a>
                  <a href="#" title="Notification Setting">
                    <Fa.FaCog />
                  </a>
                </div>
              </div>
              <ul class="notify-list notify-scroll">
                <li class="notify-item active">
                  <a href="#" class="notify-link">
                    <div class="notify-img">
                      <img src="../../../images/avatar/01.jpg" alt="avatar" />
                    </div>
                    <div class="notify-content">
                      <p class="notify-text">
                        <span>miron mahmud</span> has added the advertisement
                        post of your <span>booking</span> to his wishlist.
                      </p>
                      <span class="notify-time">just now</span>
                    </div>
                  </a>
                </li>
                <li class="notify-item">
                  <a href="#" class="notify-link">
                    <div class="notify-img">
                      <img src="../../../images/avatar/02.jpg" alt="avatar" />
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
                      <img src="../../../images/avatar/03.jpg" alt="avatar" />
                    </div>
                    <div class="notify-content">
                      <p class="notify-text">
                        <span>shipu ahmed</span> and <span>4 other</span> have
                        seen your contact number
                      </p>
                      <span class="notify-time">3 minutes ago</span>
                    </div>
                  </a>
                </li>
                <li class="notify-item">
                  <a href="#" class="notify-link">
                    <div class="notify-img">
                      <img src="../../../images/avatar/02.jpg" alt="avatar" />
                    </div>
                    <div class="notify-content">
                      <p class="notify-text">
                        <span>miron mahmud</span> has added the advertisement
                        post of your <span>booking</span> to his wishlist.
                      </p>
                      <span class="notify-time">5 days ago</span>
                    </div>
                  </a>
                </li>
                <li class="notify-item">
                  <a href="#" class="notify-link">
                    <div class="notify-img">
                      <img src="../../../images/avatar/04.jpg" alt="avatar" />
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
                      <img src="../../../images/avatar/01.jpg" alt="avatar" />
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellerNotification;
