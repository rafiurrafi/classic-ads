import React from "react";
import SidebarProfile from "../sidebarProfile";
import MobileNav from "../common/mobileNav";
import SingleBanner from "../common/singleBanner";
import "../../styles/singleAdsPage.scss";
const SingleAdsPage = ({ isOpenAside, onOpenAside }) => {
  return (
    <div className="Single-ads-page">
      <SidebarProfile isOpenAside={isOpenAside} onOpenAside={onOpenAside} />
      <MobileNav />
      <SingleBanner title="Ad Details" />
    </div>
  );
};

export default SingleAdsPage;
