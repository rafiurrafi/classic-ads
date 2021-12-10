import FilterCitiesDropdown from "./filterCitiesDropdown";
import { locationService } from "../../../services/locationService";
const FilterCities = () => {
  return (
    <div className="product-widget">
      <h6 className="product-widget-title">Filter by cities</h6>
      <form className="product-widget-form">
        <div className="product-widget-search">
          <input type="text" placeholder="Search" />
        </div>
        <ul className="product-widget-list product-widget-scroll">
          {locationService.map((location) => (
            <FilterCitiesDropdown key={location._id} location={location} />
          ))}
        </ul>
        <button type="submit" className="product-widget-btn">
          <i className="fas fa-broom"></i>
          <span>Clear Filter</span>
        </button>
      </form>
    </div>
  );
};

export default FilterCities;
