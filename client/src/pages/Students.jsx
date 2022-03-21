import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Info from "components/Info";
import Pagination from "components/Pagination";

import usePagination from "hooks/usePagination";
import useFetchData from "hooks/useFetchData";
import { removeToken } from "utils/token";
import {appUrl} from "config/constants/appUrl";

import "../styles/Students.css";

const contentByPage = 5;

const Students = () => {
  const navigate = useNavigate();
  const { isLoading, fetchData: fetchStudent, data, hasError } = useFetchData([]);

  const { nextPage, prevPage, page, setPage, totalPages } = usePagination({
      contentPerPage: contentByPage,
      count: data?.totalElements,
    });
  
  useEffect(() => {
    let isMounted = true;

    if(isMounted && page) {
      fetchStudent( `${appUrl}/users?page=${Number(page-1)}&size=${contentByPage}` );
    }

    //cleanup 
    return () => { isMounted = false; };
  }, [page]);

  const handleLogout = () => {
    removeToken();
    navigate( "/" );
  };

  return (
    <>
      <section className="container-students">
        <h2 className="group-title">User List</h2>
        <div className="wrapper-group">
          <ul>
            {isLoading && <p className="info">Loading...</p>}
            {hasError && <p className="info">{hasError} || 'Something went wrong, try again.'</p>}
            {(data?.content && data?.content?.length === 0) ?
              <p className="info">No students to show.</p> :
              data?.content?.map( ( { id,user_id,name,group } ) => (
                <Info key={id} info={{ user_id,name,group }} />
            ))} 
          </ul>
        </div>
        <Pagination
          contentPerPage={contentByPage}
          nextPage={nextPage}
          prevPage={prevPage}
          page={page}
          setPage={setPage}
          totalPages={totalPages}
          />
      </section>
      <button className="btn-logout" onClick={handleLogout}>
        <img className="item-logout" src="/log-out.svg" alt="logout"/>
        Log Out
      </button>
    </>
  )
}

export default Students;
