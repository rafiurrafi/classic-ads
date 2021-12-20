const FilterCategory = () => {
  return (
    <div className="product-widget">
      <h6 className="product-widget-title">filter by category</h6>
      <form className="product-widget-form">
        <div className="product-widget-search">
          <input type="text" placeholder="search" />
        </div>
        <ul className="product-widget-list product-widget-scroll">
          <li className="product-widget-dropitem">
            <button type="button" className="product-widget-link">
              <i className="fas fa-tags"></i>
              electronics (234)
            </button>
            <ul className="product-widget-dropdown">
              <li>
                <a href="#">mixer (56)</a>
              </li>
              <li>
                <a href="#">freez (78)</a>
              </li>
              <li>
                <a href="#">LED tv (78)</a>
              </li>
            </ul>
          </li>
          <li className="product-widget-dropitem">
            <button type="button" className="product-widget-link">
              <i className="fas fa-tags"></i>
              automobiles (767)
            </button>
            <ul className="product-widget-dropdown">
              <li>
                <a href="#">private car (56)</a>
              </li>
              <li>
                <a href="#">motorbike (78)</a>
              </li>
              <li>
                <a href="#">truck (78)</a>
              </li>
            </ul>
          </li>
          <li className="product-widget-dropitem">
            <button type="button" className="product-widget-link">
              <i className="fas fa-tags"></i>
              properties (456)
            </button>
            <ul className="product-widget-dropdown">
              <li>
                <a href="#">free land (56)</a>
              </li>
              <li>
                <a href="#">apartment (78)</a>
              </li>
              <li>
                <a href="#">shop (78)</a>
              </li>
            </ul>
          </li>
          <li className="product-widget-dropitem">
            <button type="button" className="product-widget-link">
              <i className="fas fa-tags"></i>
              fashion (356)
            </button>
            <ul className="product-widget-dropdown">
              <li>
                <a href="#">jeans (56)</a>
              </li>
              <li>
                <a href="#">t-shirt (78)</a>
              </li>
              <li>
                <a href="#">jacket (78)</a>
              </li>
            </ul>
          </li>
          <li className="product-widget-dropitem">
            <button type="button" className="product-widget-link">
              <i className="fas fa-tags"></i>
              gadgets (768)
            </button>
            <ul className="product-widget-dropdown">
              <li>
                <a href="#">computer (56)</a>
              </li>
              <li>
                <a href="#">mobile (78)</a>
              </li>
              <li>
                <a href="#">drone (78)</a>
              </li>
            </ul>
          </li>
          <li className="product-widget-dropitem">
            <button type="button" className="product-widget-link">
              <i className="fas fa-tags"></i>
              furnitures (977)
            </button>
            <ul className="product-widget-dropdown">
              <li>
                <a href="#">chair (56)</a>
              </li>
              <li>
                <a href="#">sofa (78)</a>
              </li>
              <li>
                <a href="#">table (78)</a>
              </li>
            </ul>
          </li>
          <li className="product-widget-dropitem">
            <button type="button" className="product-widget-link">
              <i className="fas fa-tags"></i>
              hospitality (124)
            </button>
            <ul className="product-widget-dropdown">
              <li>
                <a href="#">jeans (56)</a>
              </li>
              <li>
                <a href="#">t-shirt (78)</a>
              </li>
              <li>
                <a href="#">jacket (78)</a>
              </li>
            </ul>
          </li>
          <li className="product-widget-dropitem">
            <button type="button" className="product-widget-link">
              <i className="fas fa-tags"></i>
              agriculture (565)
            </button>
            <ul className="product-widget-dropdown">
              <li>
                <a href="#">jeans (56)</a>
              </li>
              <li>
                <a href="#">t-shirt (78)</a>
              </li>
              <li>
                <a href="#">jacket (78)</a>
              </li>
            </ul>
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

export default FilterCategory;
