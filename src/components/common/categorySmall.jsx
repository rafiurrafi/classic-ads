import React from "react";
import categories from "../../services/categoryService";
import useToggle from "../hooks/ustToggle";
import SubcategorySmall from "./subcategorySmall";
const CategorySmall = (props) => {
  const [isOpenSub, setIsOpenSub] = useToggle(false);
  return (
    <section class="section suggest-part suggest-part-small">
      <div class="container">
        <div class="suggest-slider slider-arrow row">
          {categories.map((category) => (
            <div className="col-3" onClick={setIsOpenSub}>
              <a class="suggest-card">
                <img src={category.icon} alt="car" />
                <h6>{category.name}</h6>
              </a>
              {isOpenSub && (
                <SubcategorySmall
                  subcategories={category.subcategory}
                  onIsOpenSub={setIsOpenSub}
                />
              )}
            </div>
          ))}
        </div>
        {/* end of suggest slider  */}
      </div>
    </section>
  );
};

export default CategorySmall;
