import React from "react";

const FilterPrice = () => {
  return (
    <div class="product-widget">
      <h6 class="product-widget-title">Filter by Price</h6>
      <form class="product-widget-form">
        <div class="product-widget-group">
          <input type="text" placeholder="min - 00" />
          <input type="text" placeholder="max - 1B" />
        </div>
        <button type="submit" class="product-widget-btn">
          <i class="fas fa-search"></i>
          <span>search</span>
        </button>
      </form>
    </div>
  );
};

export default FilterPrice;
