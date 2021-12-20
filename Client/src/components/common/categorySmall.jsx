import React from "react";
import categories from "../../services/categoryService";

import SingleCategorySmall from "./singleCategorySmall";

const CategorySmall = (props) => {
  return (
    <section className="section suggest-part suggest-part-small">
      <div className="container">
        <div className="suggest-slider slider-arrow row">
          {categories.map((category) => (
            <SingleCategorySmall key={category._id} category={category} />
          ))}
        </div>
        {/* end of suggest slider  */}
      </div>
    </section>
  );
};

export default CategorySmall;
