import Header from "./components/header";
import useToggle from "./components/hooks/ustToggle";
import $ from "jquery";
import { useEffect } from "react";
import Footer from "./components/footer";
import HomePage from "./components/pages/homePage";
import "./styles/app.scss";
import { Switch, Route } from "react-router-dom";
import AdListPage from "./components/pages/adListPage";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
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
      <Switch>
        <Route
          path="/ads/:category?/:subcategory?"
          render={(props) => (
            <AdListPage
              isOpenAside={isOpenAside}
              onOpenAside={setIsOpenAside}
              {...props}
            />
          )}
        />
        {/* <Route path="/" component={AdListPage} /> */}
        <Route
          path="/"
          render={() => (
            <HomePage isOpenAside={isOpenAside} onOpenAside={setIsOpenAside} />
          )}
        />
      </Switch>

      <Footer />
    </div>
  );
}
export default App;
