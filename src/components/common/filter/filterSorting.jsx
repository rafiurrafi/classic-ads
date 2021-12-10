import React from "react";

const FilterSorting = () => {
  return (
    <div className="product-widget">
      <h6 className="product-widget-title">Filter by Sorting</h6>
      <form className="product-widget-form">
        <select className="custom-select filter-select">
          <option selected>default</option>
          <option value="3">trending</option>
          <option value="1">featured</option>
          <option value="2">recommend</option>
        </select>
        <button type="submit" className="product-widget-btn">
          <i className="fas fa-broom"></i>
          <span>Clear Filter</span>
        </button>
      </form>
    </div>
  );
};

export default FilterSorting;
