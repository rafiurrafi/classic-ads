import Header from "./components/header";
import useToggle from "./components/hooks/ustToggle";
import SidebarProfile from "./components/sidebarProfile";
import "./styles/app.scss";
import "./styles/index.scss";
import $ from "jquery";
import { useEffect, useState } from "react";
import MobileNav from "./components/common/mobileNav";
import Banner from "./components/banner";
import FeatureHome from "./components/featureHome";
import Recommended from "./components/recommendedHome";
import TrendingHome from "./components/trendingHome";
import CityHome from "./components/cityHome";
import IncrementCounter from "./components/common/incrementCounter";
import PostAds from "./components/postAds";

function App() {
  const [isOpenAside, setIsOpenAside] = useToggle(false);
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", function () {
      var scrolling = $(this).scrollTop();
      if (scrolling > 100) {
        $(".header-part").addClass("header-fixed");
      } else {
        $(".header-part").removeClass("header-fixed");
      }
    });
  }, []);
  useEffect(() => {
    setScrollY(window.screenTop);
    console.log(scrollY);
  }, [scrollY]);
  return (
    <div className="App">
      <Header onOpenAside={setIsOpenAside} />
      <SidebarProfile isOpenAside={isOpenAside} onOpenAside={setIsOpenAside} />
      <MobileNav />
      <Banner />
      <FeatureHome />
      <Recommended />
      <TrendingHome />
      <IncrementCounter />
      <CityHome />
      <PostAds />
    </div>
  );
}
export default App;
