import Header from "./components/header";
import useToggle from "./components/hooks/ustToggle";
import "./styles/app.scss";
import "./styles/index.scss";
import $ from "jquery";
import { useEffect } from "react";

import Footer from "./components/footer";
import HomePage from "./components/pages/homePage";

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
      <HomePage isOpenAside={isOpenAside} onOpenAside={setIsOpenAside} />
      <Footer />
    </div>
  );
}
export default App;
