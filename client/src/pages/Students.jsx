import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import Info from 'components/Info';
import Pagination from 'components/Pagination';

import usePagination from 'hooks/usePagination';
import useFetchData from 'hooks/useFetchData';
import { removeToken } from 'utils/token';

import '../styles/Students.css';

const contentByPage = 5;

const Students = () => {
  const navigate = useNavigate();
  const { isLoading, fetchData: fetchStudent, data } = useFetchData([]);

  const { nextPage, prevPage, page, setPage, totalPages } = usePagination({
      contentPerPage: contentByPage,
      count: data?.totalElements,
    });
  
  useEffect(() => {
    let isMounted = true;

    if(isMounted && page) {
      fetchStudent( `http://localhost:3001/students?page=${page-1}` );
    }
    
    //cleanup 
    return () => { isMounted = false; };
  }, [page]);

  const handleLogout = () => {
    removeToken();
    navigate( '/' );
  };

  const handleGetPage = () => {

  }

  return (
    <>
      <section className='container-students'>
        <h2 className='group-title'>User List</h2>
        <div className='wrapper-group'>
          <ul>
            {isLoading ? <p className='loading'>Loading...</p> :
            (data?.content?.length > 0 ? 
              data?.content?.map(({id, user_id, name, group}) => (<Info key={id} info={{user_id, name, group}}/>)) : 
              <p className='loading'>No data to show yet</p>)}
          </ul>
        </div>
        <Pagination
            contentPerPage={contentByPage}
            nextPage={nextPage}
            prevPage={prevPage}
            page={page}
            setPage={setPage}
            totalPages={totalPages}
            getNextPage={handleGetPage}/>
      </section>
      <button className='btn-logout' onClick={handleLogout}>
        <img className='item-logout' src='/log-out.svg' alt='logout'/>
        Log Out
      </button>
    </>
  )
}

export default Students;
