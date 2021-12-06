const FilterRating = () => {
  return (
    <div class="product-widget">
      <h6 class="product-widget-title">Filter by rating</h6>
      <form class="product-widget-form">
        <ul class="product-widget-list">
          <li class="product-widget-item">
            <div class="product-widget-checkbox">
              <input type="checkbox" id="chcek4" />
            </div>
            <label class="product-widget-label" for="chcek4">
              <span class="product-widget-star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </span>
              <span class="product-widget-number">(45)</span>
            </label>
          </li>
          <li class="product-widget-item">
            <div class="product-widget-checkbox">
              <input type="checkbox" id="chcek5" />
            </div>
            <label class="product-widget-label" for="chcek5">
              <span class="product-widget-star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </span>
              <span class="product-widget-number">(55)</span>
            </label>
          </li>
          <li class="product-widget-item">
            <div class="product-widget-checkbox">
              <input type="checkbox" id="chcek6" />
            </div>
            <label class="product-widget-label" for="chcek6">
              <span class="product-widget-star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
              </span>
              <span class="product-widget-number">(65)</span>
            </label>
          </li>
          <li class="product-widget-item">
            <div class="product-widget-checkbox">
              <input type="checkbox" id="chcek7" />
            </div>
            <label class="product-widget-label" for="chcek7">
              <span class="product-widget-star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
              </span>
              <span class="product-widget-number">(75)</span>
            </label>
          </li>
          <li class="product-widget-item">
            <div class="product-widget-checkbox">
              <input type="checkbox" id="chcek8" />
            </div>
            <label class="product-widget-label" for="chcek8">
              <span class="product-widget-star">
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
              </span>
              <span class="product-widget-number">(85)</span>
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

export default FilterRating;
