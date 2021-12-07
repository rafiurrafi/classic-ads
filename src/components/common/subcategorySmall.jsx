import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

class SubcategorySmall extends React.Component {
  state = {
    search: "",
    subcategories: [],
  };
  handleSearch = (e) => {
    this.setState({ search: e.target.value });
  };
  componentDidMount() {
    this.setState({ subcategories: this.props.subcategories });
  }
  render() {
    const { title, onClose } = this.props;
    const { search } = this.state;

    const filtered = this.state.subcategories.filter((subcategory) =>
      subcategory.title.toLowerCase().includes(search)
    );
    return (
      <div className="subcategory">
        <div className="subcategory__header">
          <div className="subcategory__input-container">
            <button className="subcategory__btn" onClick={onClose}>
              <AiOutlineLeft />
            </button>
            <input
              type="search"
              placeholder={`Search ${title}`}
              className="subcategory__input"
              value={search}
              onChange={this.handleSearch}
            />
          </div>
        </div>
        <div className="subcategory__content">
          {filtered.map((subcategory) => (
            <Link
              to={subcategory.link}
              key={subcategory._id}
              className="subcategory__content-wrapper"
            >
              <img
                src={subcategory.icon}
                alt="subcategory"
                className="subcategory__content-img"
              />
              <div className="subcategory__content-text">
                <h4>{subcategory.title}</h4>
                <p>{subcategory.numberOfAds} ads</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default SubcategorySmall;
// export default SubcategorySmall;
