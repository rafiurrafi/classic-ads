const FilterRating = () => {
  return (
    <div className="product-widget">
      <h6 className="product-widget-title">Filter by rating</h6>
      <form className="product-widget-form">
        <ul className="product-widget-list">
          <li className="product-widget-item">
            <div className="product-widget-checkbox">
              <input type="checkbox" id="chcek4" />
            </div>
            <label className="product-widget-label" htmlFor="chcek4">
              <span className="product-widget-star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </span>
              <span className="product-widget-number">(45)</span>
            </label>
          </li>
          <li className="product-widget-item">
            <div className="product-widget-checkbox">
              <input type="checkbox" id="chcek5" />
            </div>
            <label className="product-widget-label" htmlFor="chcek5">
              <span className="product-widget-star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </span>
              <span className="product-widget-number">(55)</span>
            </label>
          </li>
          <li className="product-widget-item">
            <div className="product-widget-checkbox">
              <input type="checkbox" id="chcek6" />
            </div>
            <label className="product-widget-label" htmlFor="chcek6">
              <span className="product-widget-star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </span>
              <span className="product-widget-number">(65)</span>
            </label>
          </li>
          <li className="product-widget-item">
            <div className="product-widget-checkbox">
              <input type="checkbox" id="chcek7" />
            </div>
            <label className="product-widget-label" htmlFor="chcek7">
              <span className="product-widget-star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </span>
              <span className="product-widget-number">(75)</span>
            </label>
          </li>
          <li className="product-widget-item">
            <div className="product-widget-checkbox">
              <input type="checkbox" id="chcek8" />
            </div>
            <label className="product-widget-label" htmlFor="chcek8">
              <span className="product-widget-star">
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </span>
              <span className="product-widget-number">(85)</span>
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

export default FilterRating;
