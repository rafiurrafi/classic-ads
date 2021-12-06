import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
const SubcategorySmall = ({ subcategories, onIsOpenSub }) => {
  return (
    <div className="subcategory">
      <div className="subcategory__header">
        <div className="subcategory__input-container">
          <button className="subcategory__btn" onClick={onIsOpenSub}>
            <AiOutlineLeft />
          </button>
          <input
            type="search"
            placeholder="Search...."
            className="subcategory__input"
          />
        </div>
      </div>
      <div className="subcategory__content">
        {subcategories.map((subcategory) => (
          <div key={subcategory._id} className="subcategory__content-wrapper">
            <img
              src={subcategory.icon}
              alt="subcategory"
              className="subcategory__content-img"
            />
            <div className="subcategory__content-text">
              <h4>{subcategory.title}</h4>
              <p>{subcategory.numberOfAds} ads</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubcategorySmall;
