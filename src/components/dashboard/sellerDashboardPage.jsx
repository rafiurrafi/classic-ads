import React from "react";
import "../../styles/sellerDashboard.scss";
import SidebarProfile from "../sidebarProfile";
import MobileNav from "../common/mobileNav";
import SingleBanner from "../common/singleBanner";
import ProfileOverview from "./common/profileOverview";
import { userService } from "../../services/userService";
import SellerDashboard from "./common/sellerDashboard";
import { Route, Switch } from "react-router-dom";
import SellerProfile from "./common/sellerProfile";
import SellerAdsPost from "./common/sellerAdsPost";
import SellerMyAds from "./common/sellerMyAds";
import SellerSettings from "./common/sellerSettings";
import SellerBookmarks from "./common/sellerBookmarks";
import SellerMessage from "./common/sellerMessage";
import SellerNotification from "./common/sellerNotification";
//seller/:id
const SellerDashboardPage = ({ isOpenAside, onOpenAside, match }) => {
  const user = userService[0];
  console.log(user);
  return (
    <div>
      <SidebarProfile isOpenAside={isOpenAside} onOpenAside={onOpenAside} />
      <MobileNav />
      <SingleBanner title="Dashboard" />
      <ProfileOverview user={user} />
      <Switch>
        <Route
          path="/seller/dashboard"
          render={(props) => <SellerDashboard {...props} />}
        />
        <Route
          path="/seller/profile"
          render={(props) => <SellerProfile {...props} />}
        />
        <Route
          path="/seller/ads-post"
          render={(props) => <SellerAdsPost {...props} />}
        />
        <Route
          path="/seller/my-ads"
          render={(props) => <SellerMyAds {...props} />}
        />
        <Route
          path="/seller/settings"
          render={(props) => <SellerSettings {...props} />}
        />
        <Route
          path="/seller/bookmarks"
          render={(props) => <SellerBookmarks {...props} />}
        />
        <Route
          path="/seller/message"
          render={(props) => <SellerMessage {...props} />}
        />
        <Route
          path="/seller/notification"
          render={(props) => <SellerNotification {...props} />}
        />
        <Route
          path="/seller/logout"
          render={(props) => <SellerAdsPost {...props} />}
        />
      </Switch>
    </div>
  );
};

export default SellerDashboardPage;
