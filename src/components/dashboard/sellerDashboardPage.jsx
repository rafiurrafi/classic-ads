import React from "react";
import "../../styles/sellerDashboard.scss";
import SidebarProfile from "../sidebarProfile";
import MobileNav from "../common/mobileNav";
import SingleBanner from "../common/singleBanner";
import ProfileOverview from "./common/profileOverview";
import { userService } from "../../services/userService";
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
    </div>
  );
};

export default SellerDashboardPage;
