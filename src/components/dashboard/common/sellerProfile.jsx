import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/seller/sellerProfile.scss";

const SellerProfile = () => {
  return (
    <section class="profile-part mt-4">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="account-card">
              <div class="account-title">
                <h3>Membership</h3>
                <Link to="/seller/settings">Edit</Link>
              </div>
              <ul class="account-card-list">
                <li>
                  <h5>Status</h5>
                  <p>Premium</p>
                </li>
                <li>
                  <h5>Joined</h5>
                  <p>February 02, 2021</p>
                </li>
                <li>
                  <h5>Spand</h5>
                  <p>4,587</p>
                </li>
                <li>
                  <h5>Earn</h5>
                  <p>97,325</p>
                </li>
              </ul>
            </div>
            <div class="account-card">
              <div class="account-title">
                <h3>Contact Info</h3>
                <a href="/seller/settings">Edit</a>
              </div>
              <ul class="account-card-list">
                <li>
                  <h5>Website:</h5>
                  <p>www.richardwilliam.com</p>
                </li>
                <li>
                  <h5>Email:</h5>
                  <p>richard@example.com</p>
                </li>
                <li>
                  <h5>Phone:</h5>
                  <p>+12027953213</p>
                </li>
                <li>
                  <h5>Skype:</h5>
                  <p>live:richard</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="account-card">
              <div class="account-title">
                <h3>Billing Address</h3>
                <a href="/seller/settings">Edit</a>
              </div>
              <ul class="account-card-list">
                <li>
                  <h5>Post Code:</h5>
                  <p>1420</p>
                </li>
                <li>
                  <h5>State:</h5>
                  <p>West Jalkuri</p>
                </li>
                <li>
                  <h5>City:</h5>
                  <p>Narayanganj</p>
                </li>
                <li>
                  <h5>Country:</h5>
                  <p>Bangladesh</p>
                </li>
              </ul>
            </div>
            <div class="account-card">
              <div class="account-title">
                <h3>Shipping Address</h3>
                <a href="/seller/settings">Edit</a>
              </div>
              <ul class="account-card-list">
                <li>
                  <h5>Post Code:</h5>
                  <p>1100</p>
                </li>
                <li>
                  <h5>State:</h5>
                  <p>Kawran Bazar</p>
                </li>
                <li>
                  <h5>City:</h5>
                  <p>Dhaka</p>
                </li>
                <li>
                  <h5>Country:</h5>
                  <p>Bangladesh</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellerProfile;
