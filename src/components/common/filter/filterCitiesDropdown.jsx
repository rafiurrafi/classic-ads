import React, { useState } from "react";

const FilterCitiesDropdown = ({ location }) => {
  const [isChecked, setIsChecked] = useState(false);
  const styles = {
    maxHeight: isChecked ? "auto" : 0,
    backgroundColor: "red",
    transition: "maxHeight .5s",
  };
  console.log(location);
  return (
    <>
      <li className="product-widget-item">
        <div className="product-widget-checkbox">
          <input
            type="checkbox"
            id="chcek9"
            onChange={() => setIsChecked(!isChecked)}
          />
        </div>
        <label className="product-widget-label" htmlFor="chcek9">
          <span className="product-widget-text">{location.name}</span>
          <span className="product-widget-number">(95)</span>
        </label>
      </li>
      {isChecked && (
        <div style={styles}>
          {location.cities.map((city) => (
            <li key={city._id}>
              <input id={city._id} type="checkbox" />
              <label htmlFor={city._id}>{city.name}</label>
            </li>
          ))}
        </div>
      )}
    </>
  );
};

export default FilterCitiesDropdown;
