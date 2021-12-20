import React, { useState } from "react";
import SubcategorySmall from "./subcategorySmall";
const SingleCategorySmall = ({ category }) => {
  const [isOpenSub, setIsOpenSub] = useState(false);
  const closeSubcategory = () => {
    setIsOpenSub(false);
  };
  return (
    <div className="col-3" onClick={() => setIsOpenSub(true)}>
      <a className="suggest-card">
        <img src={category.icon} alt="car" />
        <h6>{category.name}</h6>
      </a>
      {isOpenSub && (
        <SubcategorySmall
          title={category.name}
          subcategories={category.subcategory}
          onClose={closeSubcategory}
        />
      )}
    </div>
  );
};

export default SingleCategorySmall;
