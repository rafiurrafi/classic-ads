import React from "react";

const FilterPrice = ({ onPriceChage }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const [min, max] = e.target.elements;
    onPriceChage([+min.value, +max.value]);
  };
  return (
    <div className="product-widget">
      <h6 className="product-widget-title">Filter by Price</h6>
      <form onSubmit={handleSubmit} className="product-widget-form">
        <div className="product-widget-group">
          <input id="min" type="text" placeholder="min - 00" />
          <input id="max" type="text" placeholder="max - 1B" />
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
