import "./styles.css";

const Pagination = ({
  nextPage,
  prevPage,
  page,
  setPage,
  totalPages,
}) => {
  return (
    <div className="wrapper-pagination">
      {totalPages ? (
        [...Array(totalPages).keys()].map(el => (
          <button
            onClick={() => setPage(el + 1)}
            key={el}
            className={`page ${page === el + 1 ? "active" : ""}`}
          >
            {el + 1}
          </button>
        ))
      ) : (
        <button className="page"> 0 </button>
      )}
      <button
        onClick={page !== totalPages ? nextPage : () => {}}
        className={`next-page ${page === totalPages && "disabled"}`}
      >
        Next&raquo;
      </button>
    </div>
  )
}

export default Pagination;
