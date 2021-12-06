import React from "react";
import categories from "../../services/categoryService";
const CategorySmall = (props) => {
  return (
    <section class="section suggest-part">
      <div class="container">
        <div class="suggest-slider slider-arrow row">
          {categories.map((category) => (
            <div className="col-3 ">
              <a href="ad-list-column3.html" class="suggest-card">
                <img src={category.icon} alt="car" />
                <h6>{category.name}</h6>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySmall;
