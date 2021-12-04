import React from "react";
import { cities } from "../services/cityService";
const CityHome = () => {
  return (
    <section class="section city-part">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-center-heading">
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
        <div class="row">
          {cities.map((city) => (
            <div class={`col-sm-6 col-md-6 col-lg-${city.size}`}>
              <a
                href="ad-list-column3.html"
                class="city-card"
                style={{ backgroundImage: `url(${city.img})` }}
              >
                <div class="city-content">
                  <h4>{city.name}</h4>
                  <p>(25) ads</p>
                </div>
              </a>
            </div>
          ))}
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="center-20">
              <a href="cities.html" class="btn btn-inline">
                <i class="fas fa-eye"></i>
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
