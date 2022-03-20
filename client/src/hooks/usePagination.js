import { useState } from 'react';
const usePagination = ({ contentPerPage, count }) => {
  const [page, setPage] = useState(1);

  const pageCount = Math.ceil(count / contentPerPage);

  const changePage = (next) => {
    setPage(state => {
      if (next) {
        if (state === pageCount) {
          return state;
        }
        return state + 1;
      }
      if (state === 1) {
        return state;
      }
      return state - 1;
    });
  };

  const setPageSafe = (num) => {
    if (num > pageCount) {
      setPage(pageCount);
    } else if (num < 1) {
      setPage(1);
    } else {
      setPage(num);
    }
  };

  return {
    totalPages: pageCount,
    nextPage: () => changePage(true),
    prevPage: () => changePage(false),
    setPage: setPageSafe,
    page,
  };
};

export default usePagination;
