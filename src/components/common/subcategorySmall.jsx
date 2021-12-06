import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
const SubcategorySmall = () => {
  return (
    <div className="subcategory">
      <div className="subcategory__header">
        <div className="subcategory__input-container">
          <button className="subcategory__btn">
            <AiOutlineLeft />
          </button>
          <input
            type="search"
            placeholder="Search...."
            className="subcategory__input"
          />
        </div>
      </div>
      <div className="subcategory__content">Content</div>
    </div>
  );
};

export default SubcategorySmall;
