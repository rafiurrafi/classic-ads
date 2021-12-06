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
import "../../styles/index.scss";
import CategorySmall from "../common/categorySmall";
const HomePage = ({ isOpenAside, onOpenAside }) => {
  return (
    <div>
      <SidebarProfile isOpenAside={isOpenAside} onOpenAside={onOpenAside} />
      <MobileNav />
      <Banner />
      <CategoryHome />
      <CategorySmall />
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
