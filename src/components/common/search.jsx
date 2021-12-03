import React, { useState } from "react";
import $ from "jquery";
const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
    $(".header-option").slideToggle("slow");
  };
  return (
    <form class="header-form">
      <div class={`header-search ${isOpen && "active"}`}>
        <button type="submit" title="Search Submit ">
          <i class="fas fa-search"></i>
        </button>
        <input type="text" placeholder="Search, Whatever you needs..." />
        <button
          type="button"
          title="Search Option"
          class="option-btn"
          onClick={handleClick}
        >
          <i class="fas fa-sliders-h"></i>
        </button>
      </div>
      <div class="header-option">
        <div class="option-grid">
          <div class="option-group">
            <input type="text" placeholder="City" />
          </div>
          <div class="option-group">
            <input type="text" placeholder="State" />
          </div>
          <div class="option-group">
            <input type="text" placeholder="Min Price" />
          </div>
          <div class="option-group">
            <input type="text" placeholder="Max Price" />
          </div>
          <button type="submit">
            <i class="fas fa-search"></i>
            <span>Search</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Search;