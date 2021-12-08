import React from "react";
import categories from "../../services/categoryService";
import { Link } from "react-router-dom";
const CategoryHome = (props) => {
  return (
    <section className="section suggest-part suggest-part-lg">
      <div className="container">
        <div className="suggest-slider slider-arrow row">
          {categories.map((category) => (
            <div key={category._id} className="col-4 col-md-3">
              <Link to={category.link} className="suggest-card">
                <img src={category.icon} alt="car" />
                <h6>{category.name}</h6>
                <p>(4,521) ads</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryHome;
