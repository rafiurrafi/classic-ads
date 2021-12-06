const FilterPopularity = () => {
  return (
    <div class="product-widget">
      <h6 class="product-widget-title">Filter by popularity</h6>
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
              <span class="product-widget-text">laptop</span>
              <span class="product-widget-number">(68)</span>
            </label>
          </li>
          <li class="product-widget-item">
            <div class="product-widget-checkbox">
              <input type="checkbox" id="chcek10" />
            </div>
            <label class="product-widget-label" for="chcek10">
              <span class="product-widget-text">camera</span>
              <span class="product-widget-number">(78)</span>
            </label>
          </li>
          <li class="product-widget-item">
            <div class="product-widget-checkbox">
              <input type="checkbox" id="chcek11" />
            </div>
            <label class="product-widget-label" for="chcek11">
              <span class="product-widget-text">television</span>
              <span class="product-widget-number">(34)</span>
            </label>
          </li>
          <li class="product-widget-item">
            <div class="product-widget-checkbox">
              <input type="checkbox" id="chcek12" />
            </div>
            <label class="product-widget-label" for="chcek12">
              <span class="product-widget-text">by cycle</span>
              <span class="product-widget-number">(43)</span>
            </label>
          </li>
          <li class="product-widget-item">
            <div class="product-widget-checkbox">
              <input type="checkbox" id="chcek13" />
            </div>
            <label class="product-widget-label" for="chcek13">
              <span class="product-widget-text">bike</span>
              <span class="product-widget-number">(57)</span>
            </label>
          </li>
          <li class="product-widget-item">
            <div class="product-widget-checkbox">
              <input type="checkbox" id="chcek14" />
            </div>
            <label class="product-widget-label" for="chcek14">
              <span class="product-widget-text">private car</span>
              <span class="product-widget-number">(67)</span>
            </label>
          </li>
          <li class="product-widget-item">
            <div class="product-widget-checkbox">
              <input type="checkbox" id="chcek15" />
            </div>
            <label class="product-widget-label" for="chcek15">
              <span class="product-widget-text">air condition</span>
              <span class="product-widget-number">(98)</span>
            </label>
          </li>
          <li class="product-widget-item">
            <div class="product-widget-checkbox">
              <input type="checkbox" id="chcek16" />
            </div>
            <label class="product-widget-label" for="chcek16">
              <span class="product-widget-text">apartment</span>
              <span class="product-widget-number">(45)</span>
            </label>
          </li>
          <li class="product-widget-item">
            <div class="product-widget-checkbox">
              <input type="checkbox" id="chcek17" />
            </div>
            <label class="product-widget-label" for="chcek17">
              <span class="product-widget-text">watch</span>
              <span class="product-widget-number">(76)</span>
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

export default FilterPopularity;
