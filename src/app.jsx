import Header from "./components/header";
import useToggle from "./components/hooks/ustToggle";
import SidebarProfile from "./components/sidebarProfile";
import "./styles/app.scss";
import $ from "jquery";
import { useEffect } from "react";
import MobileNav from "./components/common/mobileNav";

function App(props) {
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
    </div>
  );
}
export default App;
