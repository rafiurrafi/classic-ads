import React from "react";
import SidebarProfile from "../sidebarProfile";
import MobileNav from "../common/mobileNav";
import SingleBanner from "../common/singleBanner";
const SingleAdsPage = ({ isOpenAside, onOpenAside }) => {
  return (
    <div className="Single-ads-page">
      <SidebarProfile isOpenAside={isOpenAside} onOpenAside={onOpenAside} />
      <MobileNav />
      <SingleBanner title="Electronics" />
    </div>
  );
};

export default SingleAdsPage;
