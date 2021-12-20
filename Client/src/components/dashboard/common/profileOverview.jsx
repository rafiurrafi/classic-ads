import React from "react";
import * as Fa from "react-icons/fa";
import ProfileOverviewMenu from "./profileOverviewMenu";

const ProfileOverview = ({ user }) => {
  const { name, img, ads, followers, following } = user;
  const { phoneNumber, mail, city, country } = user.address;
  return (
    <section class="dash-header-part">
      <div class="container">
        <div class="dash-header-card pb-4">
          <div class="row">
            <div class="col-lg-5">
              <div class="dash-header-left">
                <div class="dash-avatar">
                  <a href="#!">
                    <img src={img} alt="avatar" />
                  </a>
                </div>
                <div class="dash-intro">
                  <h4 className="mb-2">
                    <a href="#!">{name}</a>
                  </h4>
                  <ul class="dash-meta">
                    <li className="d-flex">
                      <Fa.FaPhoneAlt className="mr-2" />
                      <span>{phoneNumber}</span>
                    </li>
                    <li className="d-flex">
                      <Fa.FaEnvelope className="mr-2" />
                      <span>{mail}</span>
                    </li>
                    <li className="d-flex">
                      <Fa.FaMapMarkerAlt className="mr-2" />
                      <span>
                        {city}, {country}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-7">
              <div class="dash-header-right">
                <div class="dash-focus dash-list">
                  <h2>{ads.length}</h2>
                  <p>listing ads</p>
                </div>
                <div class="dash-focus dash-book">
                  <h2>{followers.length}</h2>
                  <p>total follower</p>
                </div>
                <div class="dash-focus dash-rev">
                  <h2>{following.length}</h2>
                  <p>total review</p>
                </div>
              </div>
            </div>
          </div>
          <ProfileOverviewMenu />
        </div>
      </div>
    </section>
  );
};

export default ProfileOverview;
