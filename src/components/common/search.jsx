import React, { useState } from "react";
import $ from "jquery";
import { FaSearch } from "react-icons/fa";
const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
    $(".header-option").slideToggle("slow");
  };
  return (
    <form className="header-form">
      <div className={`header-search ${isOpen && "active"}`}>
        <button type="submit" title="Search Submit ">
          <i>
            <FaSearch />
          </i>
        </button>
        <input type="text" placeholder="Search, Whatever you needs..." />
        <button
          type="button"
          title="Search Option"
          className="option-btn"
          onClick={handleClick}
        >
          <i className="fas fa-sliders-h"></i>
        </button>
      </div>
      <div className="header-option">
        <div className="option-grid">
          <div className="option-group">
            <input type="text" placeholder="City" />
          </div>
          <div className="option-group">
            <input type="text" placeholder="State" />
          </div>
          <div className="option-group">
            <input type="text" placeholder="Min Price" />
          </div>
          <div className="option-group">
            <input type="text" placeholder="Max Price" />
          </div>
          <button type="submit">
            <i className="fas fa-search"></i>
            <span>Search</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Search;
