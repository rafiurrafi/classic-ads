import React from "react";

const FilterPrice = () => {
  return (
    <div className="product-widget">
      <h6 className="product-widget-title">Filter by Price</h6>
      <form className="product-widget-form">
        <div className="product-widget-group">
          <input type="text" placeholder="min - 00" />
          <input type="text" placeholder="max - 1B" />
        </div>
        <button type="submit" className="product-widget-btn">
          <i className="fas fa-search"></i>
          <span>search</span>
        </button>
      </form>
    </div>
  );
};

export default FilterPrice;
