import React, { useState } from "react";

const FilterSorting = ({ onAsc }) => {
  const [isAsc, setIsAsc] = useState("none");
  const handleChange = (e) => {
    setIsAsc(e.target.value);
    onAsc(e.target.value);
  };
  return (
    <div className="product-widget">
      <h6 className="product-widget-title">Filter by Sorting</h6>
      <form className="product-widget-form">
        <select
          className="custom-select filter-select"
          value={isAsc}
          onChange={handleChange}
        >
          <option selected>default</option>
          <option value="asc">Lowest to highest</option>
          <option value="desc">highest to Lowest</option>
        </select>
      </form>
    </div>
  );
};

export default FilterSorting;
