import React from "react";
import { Link } from "react-router-dom";

const ProfileOverviewMenu = () => {
  return (
    <div class="row">
      <div class="col-lg-12">
        <div class="dash-menu-list">
          <ul>
            <li>
              <Link class="active" to="/seller/dashboard">
                dashboard
              </Link>
            </li>
            <li>
              <Link to="/seller/profile">Profile</Link>
            </li>
            <li>
              <Link to="/seller/ads-post">ad post</Link>
            </li>
            <li>
              <Link to="/seller/my-ads">my ads</Link>
            </li>
            <li>
              <Link to="/seller/settings">settings</Link>
            </li>
            <li>
              <Link to="/seller/bookmarks">bookmarks</Link>
            </li>
            <li>
              <Link to="/seller/message">message</Link>
            </li>
            <li>
              <Link to="/seller/notification">notification</Link>
            </li>
            <li>
              <Link to="/seller/logout">logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileOverviewMenu;
