import { useState } from "react";

const FilterType = ({ onType }) => {
  const [types, setTypes] = useState([]);
  const handleCheckbox = (e) => {
    let updatedTypes = [...types];
    if (e.target.checked) updatedTypes.push(e.target.name);
    else updatedTypes = updatedTypes.filter((type) => type !== e.target.name);
    onType(updatedTypes);
    setTypes(updatedTypes);
  };
  const clearFilter = (e) => {
    e.preventDefault();
    onType([]);
    setTypes([]);
  };
  return (
    <div className="product-widget">
      <h6 className="product-widget-title">Filter by type</h6>
      <form className="product-widget-form" onSubmit={clearFilter}>
        <ul className="product-widget-list">
          <li className="product-widget-item">
            <div className="product-widget-checkbox">
              <input
                type="checkbox"
                id="chcek1"
                name="sale"
                onChange={handleCheckbox}
              />
            </div>
            <label className="product-widget-label" htmlFor="chcek1">
              <span className="product-widget-type sale">sales</span>
              <span className="product-widget-number">(15)</span>
            </label>
          </li>
          <li className="product-widget-item">
            <div className="product-widget-checkbox">
              <input
                type="checkbox"
                name="rental"
                id="chcek2"
                onChange={handleCheckbox}
              />
            </div>
            <label className="product-widget-label" htmlFor="chcek2">
              <span className="product-widget-type rent">rental</span>
              <span className="product-widget-number">(25)</span>
            </label>
          </li>
          <li className="product-widget-item">
            <div className="product-widget-checkbox">
              <input
                type="checkbox"
                id="chcek3"
                name="booking"
                onChange={handleCheckbox}
              />
            </div>
            <label className="product-widget-label" htmlFor="chcek3">
              <span className="product-widget-type booking">booking</span>
              <span className="product-widget-number">(35)</span>
            </label>
          </li>
        </ul>
        <button type="submit" className="product-widget-btn">
          <i className="fas fa-broom"></i>
          <span>Clear Filter</span>
        </button>
      </form>
    </div>
  );
};

export default FilterType;
