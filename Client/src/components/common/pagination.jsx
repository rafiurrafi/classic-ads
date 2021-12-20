import _ from "lodash";
import * as Fa from "react-icons/fa";
const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  return (
    <ul className="pagination">
      {currentPage > 1 && (
        <li className="page-item page-item-first-child">
          <a
            className="page-link"
            href="#!"
            onClick={() => onPageChange(currentPage - 1)}
          >
            <Fa.FaLongArrowAltLeft />
          </a>
        </li>
      )}
      {pages.map((page) => (
        <>
          <li key={page} className="page-item">
            <a
              className={
                currentPage === page ? "page-link active" : "page-link"
              }
              href="#!"
              onClick={() => onPageChange(page)}
            >
              {page}
            </a>
          </li>
        </>
      ))}
      {currentPage < pagesCount && (
        <li className="page-item page-item-last-child">
          <a
            className="page-link"
            href="#!"
            onClick={() => onPageChange(currentPage + 1)}
          >
            <Fa.FaLongArrowAltRight />
          </a>
        </li>
      )}
    </ul>
  );
};

export default Pagination;
