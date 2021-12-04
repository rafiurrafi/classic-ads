import React from "react";
import { cities } from "../services/cityService";
const CityHome = () => {
  return (
    <section className="section city-part">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-center-heading">
              <h2>
                Top Cities by <span>Ads</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit
                aspernatur illum vel sunt libero voluptatum repudiandae veniam
                maxime tenetur.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {cities.map((city) => (
            <div className={`col-sm-6 col-md-6 col-lg-${city.size}`}>
              <a
                href="ad-list-column3.html"
                className="city-card"
                style={{ backgroundImage: `url(${city.img})` }}
              >
                <div className="city-content">
                  <h4>{city.name}</h4>
                  <p>(25) ads</p>
                </div>
              </a>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="center-20">
              <a href="cities.html" className="btn btn-inline">
                <i className="fas fa-eye"></i>
                <span>view all Cities</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityHome;
