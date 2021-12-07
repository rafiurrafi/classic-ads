const FilterPopularity = () => {
  return (
    <div className="product-widget">
      <h6 className="product-widget-title">Filter by popularity</h6>
      <form className="product-widget-form">
        <div className="product-widget-search">
          <input type="text" placeholder="Search" />
        </div>
        <ul className="product-widget-list product-widget-scroll">
          <li className="product-widget-item">
            <div className="product-widget-checkbox">
              <input type="checkbox" id="chcek9" />
            </div>
            <label className="product-widget-label" htmlFor="chcek9">
              <span className="product-widget-text">laptop</span>
              <span className="product-widget-number">(68)</span>
            </label>
          </li>
          <li className="product-widget-item">
            <div className="product-widget-checkbox">
              <input type="checkbox" id="chcek10" />
            </div>
            <label className="product-widget-label" htmlFor="chcek10">
              <span className="product-widget-text">camera</span>
              <span className="product-widget-number">(78)</span>
            </label>
          </li>
          <li className="product-widget-item">
            <div className="product-widget-checkbox">
              <input type="checkbox" id="chcek11" />
            </div>
            <label className="product-widget-label" htmlFor="chcek11">
              <span className="product-widget-text">television</span>
              <span className="product-widget-number">(34)</span>
            </label>
          </li>
          <li className="product-widget-item">
            <div className="product-widget-checkbox">
              <input type="checkbox" id="chcek12" />
            </div>
            <label className="product-widget-label" htmlFor="chcek12">
              <span className="product-widget-text">by cycle</span>
              <span className="product-widget-number">(43)</span>
            </label>
          </li>
          <li className="product-widget-item">
            <div className="product-widget-checkbox">
              <input type="checkbox" id="chcek13" />
            </div>
            <label className="product-widget-label" htmlFor="chcek13">
              <span className="product-widget-text">bike</span>
              <span className="product-widget-number">(57)</span>
            </label>
          </li>
          <li className="product-widget-item">
            <div className="product-widget-checkbox">
              <input type="checkbox" id="chcek14" />
            </div>
            <label className="product-widget-label" htmlFor="chcek14">
              <span className="product-widget-text">private car</span>
              <span className="product-widget-number">(67)</span>
            </label>
          </li>
          <li className="product-widget-item">
            <div className="product-widget-checkbox">
              <input type="checkbox" id="chcek15" />
            </div>
            <label className="product-widget-label" htmlFor="chcek15">
              <span className="product-widget-text">air condition</span>
              <span className="product-widget-number">(98)</span>
            </label>
          </li>
          <li className="product-widget-item">
            <div className="product-widget-checkbox">
              <input type="checkbox" id="chcek16" />
            </div>
            <label className="product-widget-label" htmlFor="chcek16">
              <span className="product-widget-text">apartment</span>
              <span className="product-widget-number">(45)</span>
            </label>
          </li>
          <li className="product-widget-item">
            <div className="product-widget-checkbox">
              <input type="checkbox" id="chcek17" />
            </div>
            <label className="product-widget-label" htmlFor="chcek17">
              <span className="product-widget-text">watch</span>
              <span className="product-widget-number">(76)</span>
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

export default FilterPopularity;
