import _ from "lodash";
const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  return (
    <ul className="pagination">
      {currentPage > 1 && (
        <li className="page-item">
          <a className="page-link" href="#!">
            <i className="fas fa-long-arrow-alt-left"></i>
          </a>
        </li>
      )}
      {pages.map((page) => (
        <li key={page} className="page-item">
          <a
            className={currentPage === page ? "page-link active" : "page-link"}
            href="#!"
            onClick={() => onPageChange(page)}
          >
            {page}
          </a>
        </li>
      ))}

      {currentPage < pagesCount && (
        <li className="page-item">
          <a className="page-link" href="#!">
            <i className="fas fa-long-arrow-alt-right"></i>
          </a>
        </li>
      )}
    </ul>
  );
};

export default Pagination;
