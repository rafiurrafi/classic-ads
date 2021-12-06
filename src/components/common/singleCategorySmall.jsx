import React from "react";
import SubcategorySmall from "./subcategorySmall";
import useToggle from "../hooks/ustToggle";
const SingleCategorySmall = ({ category }) => {
  const [isOpenSub, setIsOpenSub] = useToggle(false);
  return (
    <div className="col-3" onClick={setIsOpenSub}>
      <a className="suggest-card">
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
  );
};

export default SingleCategorySmall;
