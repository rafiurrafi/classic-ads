import "../../styles/incrementCounter.scss";
import lambo from "../../images/bg/05.jfif";
const IncrementCounter = (props) => {
  const style = {
    backgroundImage: `linear-gradient(to right bottom, rgba(0, 0, 0, .3), rgba(0, 0, 0, .7)), url(${lambo})`,
  };
  return (
    <section className="increment-counter" style={style}>
      <div className="container">
        <div className="row">
          <div className="col">
            <i class="fas fa-user fa-3x"></i>
            <div className="counter" data-target="929238">
              929238
            </div>
            <span>Registered Users</span>
          </div>
          <div className="col">
            <i class="fab fa-twitter fa-3x"></i>
            <div className="counter" data-target="242789">
              242789
            </div>
            <span>Community Ads</span>
          </div>
          <div className="col">
            <i class="fab fa-angellist fa-3x"></i>
            <div className="counter" data-target="242789">
              242789
            </div>
            <span>Community Ads</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IncrementCounter;
