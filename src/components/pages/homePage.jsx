import React from "react";
import SidebarProfile from "../sidebarProfile";

import MobileNav from "../common/mobileNav";
import Banner from "../banner";
import FeatureHome from "../featureHome";
import Recommended from "../featuredAdsHome";
import TrendingHome from "../trendingHome";
import CityHome from "../cityHome";
import IncrementCounter from "../common/incrementCounter";
import PostAds from "../postAds";
import PostHome from "../postHome";
import CategoryHome from "../common/category";
const HomePage = ({ isOpenAside, onOpenAside }) => {
  return (
    <div>
      <SidebarProfile isOpenAside={isOpenAside} onOpenAside={onOpenAside} />
      <MobileNav />
      <Banner />
      <CategoryHome />
      <FeatureHome />
      <Recommended />
      <TrendingHome />
      <IncrementCounter />
      <CityHome />
      <PostAds />
      <PostHome />
    </div>
  );
};

export default HomePage;
