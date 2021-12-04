import React from "react";
import categories from "../../services/categoryService";
const CategoryHome = (props) => {
  return (
    <section class="suggest-part">
      <div class="container">
        <div class="suggest-slider slider-arrow row">
          <div className="row">
            {categories.map((category) => (
              <div className="col-4 col-md-3 mb-3">
                <a href="ad-list-column3.html" class="suggest-card">
                  <img src={category.icon} alt="car" />
                  <h6>{category.name}</h6>
                  <p>(4,521) ads</p>
                </a>
              </div>
            ))}
          </div>
          {/* <a href="ad-list-column3.html" class="suggest-card">
            <img src="images/suggest/furniture.png" alt="furniture" />
            <h6>furniture</h6>
            <p>(4,521) ads</p>
          </a>
          <a href="ad-list-column3.html" class="suggest-card">
            <img src="images/suggest/properties.png" alt="house" />
            <h6>properties</h6>
            <p>(4,521) ads</p>
          </a>
          <a href="ad-list-column3.html" class="suggest-card">
            <img src="images/suggest/fashion.png" alt="food" />
            <h6>fashion</h6>
            <p>(4,521) ads</p>
          </a>
          <a href="ad-list-column3.html" class="suggest-card">
            <img src="images/suggest/electronics.png" alt="cycle" />
            <h6>electronics</h6>
            <p>(4,521) ads</p>
          </a>
          <a href="ad-list-column3.html" class="suggest-card">
            <img src="images/suggest/hospitality.png" alt="clothes" />
            <h6>hospitality</h6>
            <p>(4,521) ads</p>
          </a>
          <a href="ad-list-column3.html" class="suggest-card">
            <img src="images/suggest/gadgets.png" alt="computer" />
            <h6>gadgets</h6>
            <p>(4,521) ads</p>
          </a>
          <a href="ad-list-column3.html" class="suggest-card">
            <img src="images/suggest/education.png" alt="phone" />
            <h6>education</h6>
            <p>(4,521) ads</p>
          </a>
          <a href="ad-list-column3.html" class="suggest-card">
            <img src="images/suggest/software.png" alt="scooter" />
            <h6>software</h6>
            <p>(4,521) ads</p>
          </a>
          <a href="ad-list-column3.html" class="suggest-card">
            <img src="images/suggest/food.png" alt="television" />
            <h6>food</h6>
            <p>(4,521) ads</p>
          </a>
          <a href="ad-list-column3.html" class="suggest-card">
            <img src="images/suggest/services.png" alt="truck" />
            <h6>services</h6>
            <p>(4,521) ads</p>
          </a>
          <a href="ad-list-column3.html" class="suggest-card">
            <img src="images/suggest/animals.png" alt="pet" />
            <h6>animals</h6>
            <p>(4,521) ads</p>
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default CategoryHome;
