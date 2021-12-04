import Header from "./components/header";
import useToggle from "./components/hooks/ustToggle";
import SidebarProfile from "./components/sidebarProfile";
import "./styles/app.scss";
import "./styles/index.scss";
import $ from "jquery";
import { useEffect } from "react";
import MobileNav from "./components/common/mobileNav";
import Banner from "./components/banner";
import FeatureHome from "./components/featureHome";
import Recommended from "./components/recommendedHome";
import TrendingHome from "./components/trendingHome";

function App() {
  const [isOpenAside, setIsOpenAside] = useToggle(false);
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
  return (
    <div className="App">
      <Header onOpenAside={setIsOpenAside} />
      <SidebarProfile isOpenAside={isOpenAside} onOpenAside={setIsOpenAside} />
      <MobileNav />
      <Banner />
      <FeatureHome />
      <Recommended />
      <TrendingHome />
    </div>
  );
}
export default App;
