const FilterCities = () => {
  return (
    <div class="product-widget">
      <h6 class="product-widget-title">Filter by cities</h6>
      <form class="product-widget-form">
        <div class="product-widget-search">
          <input type="text" placeholder="Search" />
        </div>
        <ul class="product-widget-list product-widget-scroll">
          <li class="product-widget-item">
            <div class="product-widget-checkbox">
              <input type="checkbox" id="chcek9" />
            </div>
            <label class="product-widget-label" for="chcek9">
              <span class="product-widget-text">Los Angeles</span>
              <span class="product-widget-number">(95)</span>
            </label>
          </li>
          <li class="product-widget-item">
            <div class="product-widget-checkbox">
              <input type="checkbox" id="chcek10" />
            </div>
            <label class="product-widget-label" for="chcek10">
              <span class="product-widget-text">San Francisco</span>
              <span class="product-widget-number">(82)</span>
            </label>
          </li>
          <li class="product-widget-item">
            <div class="product-widget-checkbox">
              <input type="checkbox" id="chcek11" />
            </div>
            <label class="product-widget-label" for="chcek11">
              <span class="product-widget-text">California</span>
              <span class="product-widget-number">(1t)</span>
            </label>
          </li>
          <li class="product-widget-item">
            <div class="product-widget-checkbox">
              <input type="checkbox" id="chcek12" />
            </div>
            <label class="product-widget-label" for="chcek12">
              <span class="product-widget-text">Manhattan</span>
              <span class="product-widget-number">(46)</span>
            </label>
          </li>
          <li class="product-widget-item">
            <div class="product-widget-checkbox">
              <input type="checkbox" id="chcek13" />
            </div>
            <label class="product-widget-label" for="chcek13">
              <span class="product-widget-text">Baltimore</span>
              <span class="product-widget-number">(24)</span>
            </label>
          </li>
          <li class="product-widget-item">
            <div class="product-widget-checkbox">
              <input type="checkbox" id="chcek14" />
            </div>
            <label class="product-widget-label" for="chcek14">
              <span class="product-widget-text">Avocados</span>
              <span class="product-widget-number">(34)</span>
            </label>
          </li>
          <li class="product-widget-item">
            <div class="product-widget-checkbox">
              <input type="checkbox" id="chcek15" />
            </div>
            <label class="product-widget-label" for="chcek15">
              <span class="product-widget-text">new york</span>
              <span class="product-widget-number">(82)</span>
            </label>
          </li>
          <li class="product-widget-item">
            <div class="product-widget-checkbox">
              <input type="checkbox" id="chcek16" />
            </div>
            <label class="product-widget-label" for="chcek16">
              <span class="product-widget-text">Houston</span>
              <span class="product-widget-number">(45)</span>
            </label>
          </li>
          <li class="product-widget-item">
            <div class="product-widget-checkbox">
              <input type="checkbox" id="chcek17" />
            </div>
            <label class="product-widget-label" for="chcek17">
              <span class="product-widget-text">Chicago</span>
              <span class="product-widget-number">(19)</span>
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

export default FilterCities;
