const FilterType = () => {
  return (
    <div class="product-widget">
      <h6 class="product-widget-title">Filter by type</h6>
      <form class="product-widget-form">
        <ul class="product-widget-list">
          <li class="product-widget-item">
            <div class="product-widget-checkbox">
              <input type="checkbox" id="chcek1" />
            </div>
            <label class="product-widget-label" for="chcek1">
              <span class="product-widget-type sale">sales</span>
              <span class="product-widget-number">(15)</span>
            </label>
          </li>
          <li class="product-widget-item">
            <div class="product-widget-checkbox">
              <input type="checkbox" id="chcek2" />
            </div>
            <label class="product-widget-label" for="chcek2">
              <span class="product-widget-type rent">rental</span>
              <span class="product-widget-number">(25)</span>
            </label>
          </li>
          <li class="product-widget-item">
            <div class="product-widget-checkbox">
              <input type="checkbox" id="chcek3" />
            </div>
            <label class="product-widget-label" for="chcek3">
              <span class="product-widget-type booking">booking</span>
              <span class="product-widget-number">(35)</span>
            </label>
          </li>
        </ul>
        <button type="submit" class="product-widget-btn">
          <i class="fas fa-broom"></i>
          <span>Clear Filter</span>
        </button>
      </form>
    </div>
  );
};

export default FilterType;
